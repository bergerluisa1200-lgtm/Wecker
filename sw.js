const CACHE_NAME = 'wakeup-v21';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/alarm-sound.wav',
];

// ============================================================
// CACHING
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {
        return Promise.allSettled(ASSETS.map((url) => cache.add(url)));
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// ============================================================
// BACKGROUND ALARM CHECKING
// ============================================================
let scheduledAlarms = [];
let alarmCheckTimer = null;

// Receive alarm data from the main page
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SYNC_ALARMS') {
    scheduledAlarms = event.data.alarms || [];
    scheduleNextCheck();
  }
});

function scheduleNextCheck() {
  if (alarmCheckTimer) clearTimeout(alarmCheckTimer);
  if (scheduledAlarms.length === 0) return;

  // Find how many ms until the next alarm
  const now = new Date();
  let minMs = Infinity;

  for (const alarm of scheduledAlarms) {
    if (!shouldAlarmFireToday(alarm, now)) continue;
    const [h, m] = alarm.time.split(':').map(Number);
    const alarmDate = new Date(now);
    alarmDate.setHours(h, m, 0, 0);
    // If alarm time already passed today, skip
    if (alarmDate <= now) continue;
    const diff = alarmDate - now;
    if (diff < minMs) minMs = diff;
  }

  if (minMs === Infinity) {
    // No alarms today — check again in 30 minutes (catches midnight rollover)
    alarmCheckTimer = setTimeout(() => checkAndFire(), 30 * 60 * 1000);
    return;
  }

  // Schedule check slightly before alarm time (1 second early to be safe)
  const delay = Math.max(minMs - 1000, 1000);
  alarmCheckTimer = setTimeout(() => checkAndFire(), delay);
}

function shouldAlarmFireToday(alarm, now) {
  const day = now.getDay();
  const dateStr = now.toDateString();
  if (alarm.firedToday === dateStr) return false;

  switch (alarm.repeat) {
    case 'once': return !alarm.firedToday;
    case 'daily': return true;
    case 'weekdays': return day >= 1 && day <= 5;
    case 'weekends': return day === 0 || day === 6;
    case 'custom': return alarm.customDays && alarm.customDays.includes(day);
    default: return true;
  }
}

async function checkAndFire() {
  const now = new Date();
  const currentTime = now.toTimeString().substring(0, 5); // "HH:MM"

  let fired = false;
  for (const alarm of scheduledAlarms) {
    if (!shouldAlarmFireToday(alarm, now)) continue;
    if (alarm.time === currentTime) {
      // Check if any app window is open and focused
      const clients = await self.clients.matchAll({ type: 'window' });
      const hasVisibleClient = clients.some(c => c.visibilityState === 'visible');

      if (!hasVisibleClient) {
        // App is not open — fire notification from SW
        await fireBackgroundNotification(alarm);
        fired = true;
        // Notify any open (but hidden) tabs
        for (const client of clients) {
          client.postMessage({ type: 'ALARM_FIRED', time: alarm.time });
        }
      }
      // If app IS visible, the main page handles it
    }
  }

  // Schedule next check
  scheduleNextCheck();
}

async function fireBackgroundNotification(alarm) {
  const desc = alarm.mode === 'find-item' ? 'Find an item!' :
               alarm.mode === 'exercise' ? 'Do your exercise!' :
               alarm.mode === 'typing' ? 'Typing challenge!' :
               alarm.mode === 'math' ? 'Solve math!' : 'Complete your challenge!';

  try {
    await self.registration.showNotification('⏰ WAKE UP — Alarm!', {
      body: `${alarm.time} — ${desc}\nTap to open and dismiss your alarm.`,
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'wakeup-alarm-' + alarm.time,
      requireInteraction: true,
      vibrate: [500, 300, 500, 300, 500, 300, 500, 300, 500, 300, 500],
      sound: './icons/alarm-sound.wav',
      actions: [
        { action: 'open', title: 'DISMISS ALARM' },
      ],
      data: { time: alarm.time },
    });
  } catch (e) {
    // Fallback: simpler notification
    try {
      await self.registration.showNotification('WAKE UP!', {
        body: `${alarm.time} — Time to wake up!`,
        icon: './icons/icon-192.png',
        tag: 'wakeup-alarm',
        requireInteraction: true,
      });
    } catch (_) {}
  }
}

// Handle notification click — open or focus the app
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      // Focus existing window if open
      for (const client of clients) {
        if ('focus' in client) {
          client.focus();
          client.postMessage({ type: 'ALARM_FIRED', time: event.notification.data?.time });
          return;
        }
      }
      // Open new window
      return self.clients.openWindow('./');
    })
  );
});
