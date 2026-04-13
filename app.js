// ============================================================
// WAKE // UP — Neural Alarm System v3.0
// ============================================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================================
// ITEM & EXERCISE DATABASE
// ============================================================
const ITEMS = [
  // Clothing
  { id: 'shoe', name: 'A Shoe', icon: '\uD83D\uDC5F', category: 'clothing', difficulty: 'easy' },
  { id: 'sock', name: 'A Sock', icon: '\uD83E\uDDE6', category: 'clothing', difficulty: 'easy' },
  { id: 'hat', name: 'A Hat', icon: '\uD83E\uDDE2', category: 'clothing', difficulty: 'medium' },
  { id: 'jacket', name: 'A Jacket', icon: '\uD83E\uDDE5', category: 'clothing', difficulty: 'easy' },
  { id: 'sunglasses', name: 'Sunglasses', icon: '\uD83D\uDD76\uFE0F', category: 'clothing', difficulty: 'medium' },
  { id: 'watch', name: 'A Watch', icon: '\u231A', category: 'clothing', difficulty: 'medium' },
  { id: 'backpack', name: 'A Backpack', icon: '\uD83C\uDF92', category: 'clothing', difficulty: 'medium' },
  { id: 'scarf', name: 'A Scarf', icon: '\uD83E\uDDE3', category: 'clothing', difficulty: 'hard' },
  { id: 'belt', name: 'A Belt', icon: '\uD83D\uDC5C', category: 'clothing', difficulty: 'hard' },
  // Home
  { id: 'plant', name: 'A Plant', icon: '\uD83C\uDF3F', category: 'home', difficulty: 'easy' },
  { id: 'pillow', name: 'A Pillow', icon: '\uD83D\uDECF\uFE0F', category: 'home', difficulty: 'easy' },
  { id: 'towel', name: 'A Towel', icon: '\uD83E\uDDFB', category: 'home', difficulty: 'easy' },
  { id: 'candle', name: 'A Candle', icon: '\uD83D\uDD6F\uFE0F', category: 'home', difficulty: 'medium' },
  { id: 'remote', name: 'A TV Remote', icon: '\uD83D\uDCFA', category: 'home', difficulty: 'easy' },
  { id: 'umbrella', name: 'An Umbrella', icon: '\u2602\uFE0F', category: 'home', difficulty: 'medium' },
  { id: 'keys', name: 'Your Keys', icon: '\uD83D\uDD11', category: 'home', difficulty: 'medium' },
  { id: 'mirror', name: 'A Mirror', icon: '\uD83E\uDE9E', category: 'home', difficulty: 'medium' },
  { id: 'stuffed-animal', name: 'A Stuffed Animal', icon: '\uD83E\uDDF8', category: 'home', difficulty: 'hard' },
  { id: 'flashlight', name: 'A Flashlight', icon: '\uD83D\uDD26', category: 'home', difficulty: 'hard' },
  { id: 'battery', name: 'A Battery', icon: '\uD83D\uDD0B', category: 'home', difficulty: 'hard' },
  { id: 'rubber-band', name: 'A Rubber Band', icon: '\u27B0', category: 'home', difficulty: 'hard' },
  // Kitchen
  { id: 'cup', name: 'A Cup / Mug', icon: '\u2615', category: 'kitchen', difficulty: 'easy' },
  { id: 'spoon', name: 'A Spoon', icon: '\uD83E\uDD44', category: 'kitchen', difficulty: 'easy' },
  { id: 'fork', name: 'A Fork', icon: '\uD83C\uDF74', category: 'kitchen', difficulty: 'easy' },
  { id: 'plate', name: 'A Plate', icon: '\uD83C\uDF7D\uFE0F', category: 'kitchen', difficulty: 'medium' },
  { id: 'bottle', name: 'A Water Bottle', icon: '\uD83C\uDF76', category: 'kitchen', difficulty: 'easy' },
  { id: 'fruit', name: 'A Piece of Fruit', icon: '\uD83C\uDF4E', category: 'kitchen', difficulty: 'medium' },
  { id: 'banana', name: 'A Banana', icon: '\uD83C\uDF4C', category: 'kitchen', difficulty: 'medium' },
  // Bathroom
  { id: 'toothbrush', name: 'A Toothbrush', icon: '\uD83E\uDEA5', category: 'bathroom', difficulty: 'medium' },
  { id: 'soap', name: 'A Bar of Soap', icon: '\uD83E\uDDFC', category: 'bathroom', difficulty: 'medium' },
  { id: 'comb', name: 'A Comb / Brush', icon: '\uD83E\uDEB6', category: 'bathroom', difficulty: 'hard' },
  // Desk
  { id: 'book', name: 'A Book', icon: '\uD83D\uDCD6', category: 'desk', difficulty: 'easy' },
  { id: 'pen', name: 'A Pen', icon: '\uD83D\uDD8A\uFE0F', category: 'desk', difficulty: 'medium' },
  { id: 'notebook', name: 'A Notebook', icon: '\uD83D\uDCD3', category: 'desk', difficulty: 'easy' },
  { id: 'scissors', name: 'Scissors', icon: '\u2702\uFE0F', category: 'desk', difficulty: 'hard' },
  { id: 'headphones', name: 'Headphones', icon: '\uD83C\uDFA7', category: 'desk', difficulty: 'medium' },
  { id: 'charger', name: 'A Phone Charger', icon: '\uD83D\uDD0C', category: 'desk', difficulty: 'medium' },
  { id: 'mouse', name: 'A Computer Mouse', icon: '\uD83D\uDDB1\uFE0F', category: 'desk', difficulty: 'medium' },
  { id: 'wallet', name: 'Your Wallet', icon: '\uD83D\uDC5B', category: 'personal', difficulty: 'medium' },
  { id: 'paperclip', name: 'A Paperclip', icon: '\uD83D\uDCCE', category: 'desk', difficulty: 'hard' },
  { id: 'stapler', name: 'A Stapler', icon: '\uD83D\uDCCC', category: 'desk', difficulty: 'hard' },
];

const EXERCISES = [
  { id: 'jumping-jacks-5', name: '5 Jumping Jacks', type: 'jumping-jacks', count: 5, difficulty: 'easy' },
  { id: 'jumping-jacks-10', name: '10 Jumping Jacks', type: 'jumping-jacks', count: 10, difficulty: 'easy' },
  { id: 'jumping-jacks-25', name: '25 Jumping Jacks', type: 'jumping-jacks', count: 25, difficulty: 'medium' },
  { id: 'jumping-jacks-50', name: '50 Jumping Jacks', type: 'jumping-jacks', count: 50, difficulty: 'hard' },
  { id: 'pushups-3', name: '3 Push-Ups', type: 'pushups', count: 3, difficulty: 'easy' },
  { id: 'pushups-5', name: '5 Push-Ups', type: 'pushups', count: 5, difficulty: 'medium' },
  { id: 'pushups-10', name: '10 Push-Ups', type: 'pushups', count: 10, difficulty: 'medium' },
  { id: 'pushups-20', name: '20 Push-Ups', type: 'pushups', count: 20, difficulty: 'hard' },
  { id: 'squats-5', name: '5 Squats', type: 'squats', count: 5, difficulty: 'easy' },
  { id: 'squats-10', name: '10 Squats', type: 'squats', count: 10, difficulty: 'medium' },
  { id: 'squats-20', name: '20 Squats', type: 'squats', count: 20, difficulty: 'hard' },
  { id: 'squats-30', name: '30 Squats', type: 'squats', count: 30, difficulty: 'hard' },
];

// ============================================================
// STATE
// ============================================================
const state = {
  alarms: JSON.parse(localStorage.getItem('wakeup-alarms') || '[]'),
  history: JSON.parse(localStorage.getItem('wakeup-history') || '[]'),
  activeAlarm: null,
  audioCtx: null,
  alarmSoundTimeout: null,
  alarmGainNode: null,
  cameraStream: null,
  challengeStartTime: null,
  theme: localStorage.getItem('wakeup-theme') || 'dark',
  customSound: localStorage.getItem('wakeup-custom-sound') || null,
  customSoundName: localStorage.getItem('wakeup-custom-sound-name') || '',
  penaltyApplied: false,
  penaltyInterval: null,
  multiSteps: [],
  multiStepIndex: 0,
  gradualInterval: null,
  gradualAudioCtx: null,
  bedtimeShown: false,
  sleepHours: parseInt(localStorage.getItem('wakeup-sleep-hours') || '8'),
};

// ============================================================
// AUTHENTICATION
// ============================================================
function getUsers() {
  return JSON.parse(localStorage.getItem('wakeup-users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('wakeup-users', JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem('wakeup-current-user');
}

function setCurrentUser(username) {
  localStorage.setItem('wakeup-current-user', username);
}

function hashPassword(password) {
  // Simple hash for client-side demo (not cryptographically secure)
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return 'h' + Math.abs(hash).toString(36);
}

let isRegisterMode = false;

$('#btn-toggle-register').addEventListener('click', () => {
  isRegisterMode = !isRegisterMode;
  $('#login-panel-title').textContent = isRegisterMode ? 'CREATE ACCOUNT' : 'SIGN IN';
  $('#btn-login').querySelector('.btn-text').textContent = isRegisterMode ? 'CREATE ACCOUNT' : 'SIGN IN';
  $('#btn-toggle-register').textContent = isRegisterMode ? 'BACK TO SIGN IN' : 'CREATE NEW ACCOUNT';
  $('#register-name-row').classList.toggle('hidden', !isRegisterMode);
  $('#login-error').classList.add('hidden');
});

$('#btn-login').addEventListener('click', () => {
  const username = $('#login-username').value.trim();
  const password = $('#login-password').value;
  const errorEl = $('#login-error');

  if (!username || !password) {
    errorEl.textContent = 'Please fill in all fields.';
    errorEl.classList.remove('hidden');
    return;
  }

  const users = getUsers();
  const hashed = hashPassword(password);

  if (isRegisterMode) {
    const displayName = $('#register-name').value.trim() || username;
    if (users[username]) {
      errorEl.textContent = 'Username already exists.';
      errorEl.classList.remove('hidden');
      return;
    }
    if (password.length < 4) {
      errorEl.textContent = 'Password must be at least 4 characters.';
      errorEl.classList.remove('hidden');
      return;
    }
    users[username] = { password: hashed, displayName };
    saveUsers(users);
    setCurrentUser(username);
    loadUserSession(username, displayName);
  } else {
    if (!users[username] || users[username].password !== hashed) {
      errorEl.textContent = 'Invalid username or password.';
      errorEl.classList.remove('hidden');
      return;
    }
    setCurrentUser(username);
    loadUserSession(username, users[username].displayName);
  }
});

// Enter key to submit
$('#login-password').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') $('#btn-login').click();
});

function loadUserSession(username, displayName) {
  // Load user-specific data
  state.alarms = JSON.parse(localStorage.getItem(`wakeup-alarms-${username}`) || '[]');
  state.history = JSON.parse(localStorage.getItem(`wakeup-history-${username}`) || '[]');

  // Show user badge
  const badge = $('#user-badge');
  badge.classList.remove('hidden');
  const initials = (displayName || username).substring(0, 2).toUpperCase();
  $('#user-avatar').textContent = initials;
  $('#user-display-name').textContent = displayName || username;

  showScreen('setup');
  renderAlarms();
  updateStats();
  updateTomorrowPreview();
  updateBedtimeDisplay();
}

// Override save functions to be user-scoped
const _origSaveAlarms = function() {
  const user = getCurrentUser();
  if (user) localStorage.setItem(`wakeup-alarms-${user}`, JSON.stringify(state.alarms));
  else localStorage.setItem('wakeup-alarms', JSON.stringify(state.alarms));
};

const _origSaveHistory = function() {
  const user = getCurrentUser();
  if (user) localStorage.setItem(`wakeup-history-${user}`, JSON.stringify(state.history));
  else localStorage.setItem('wakeup-history', JSON.stringify(state.history));
};

$('#btn-logout').addEventListener('click', () => {
  localStorage.removeItem('wakeup-current-user');
  $('#user-badge').classList.add('hidden');
  // Reset form
  $('#login-username').value = '';
  $('#login-password').value = '';
  $('#login-error').classList.add('hidden');
  showScreen('login');
});

// Auto-login if session exists
(function checkAutoLogin() {
  const username = getCurrentUser();
  if (username) {
    const users = getUsers();
    if (users[username]) {
      loadUserSession(username, users[username].displayName);
      return;
    }
  }
  // Stay on login screen (it's already active by default)
})();

// ============================================================
// POPULATE SELECTS
// ============================================================
const itemSelect = $('#item-select');
ITEMS.forEach((item) => {
  const opt = document.createElement('option');
  opt.value = item.id;
  opt.textContent = `${item.icon} ${item.name} [${item.difficulty.toUpperCase()}]`;
  itemSelect.appendChild(opt);
});

const exerciseSelect = $('#exercise-select');
EXERCISES.forEach((ex) => {
  const opt = document.createElement('option');
  opt.value = ex.id;
  opt.textContent = `${ex.name} [${ex.difficulty.toUpperCase()}]`;
  exerciseSelect.appendChild(opt);
});

// ============================================================
// THEME
// ============================================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  localStorage.setItem('wakeup-theme', theme);
  $('#icon-moon').classList.toggle('hidden', theme === 'light');
  $('#icon-sun').classList.toggle('hidden', theme === 'dark');
}
$('#theme-toggle').addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));
applyTheme(state.theme);

// ============================================================
// SCREENS
// ============================================================
function showScreen(id) {
  $$('.screen').forEach((s) => s.classList.remove('active'));
  $(`#screen-${id}`).classList.add('active');
}

// ============================================================
// CLOCK
// ============================================================
function updateClock() {
  const now = new Date();
  $('#current-time').textContent = now.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  $('#current-date').textContent = dateStr.toUpperCase();
  const h = now.getHours().toString(16).padStart(2, '0');
  const m = now.getMinutes().toString(16).padStart(2, '0');
  const s = now.getSeconds().toString(16).padStart(2, '0');
  $('#clock-hex').textContent = `#${h}${m}${s}`;
  checkAlarms(now);
  checkBedtime(now);
  checkGradualWakeup(now);
}
setInterval(updateClock, 1000);
updateClock();

// ============================================================
// DAILY RANDOM SEED
// ============================================================
function getDailySeed() {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

function seededRandom(seed) {
  let s = seed;
  return function () {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function filterByDifficulty(list, difficulty) {
  if (difficulty === 'easy') return list.filter((i) => i.difficulty === 'easy');
  if (difficulty === 'medium') return list.filter((i) => i.difficulty === 'easy' || i.difficulty === 'medium');
  return list; // hard = all items
}

function getDailyRandomChallenge(alarmIndex, difficulty, seedOffset) {
  const rng = seededRandom(getDailySeed() + alarmIndex * 777 + (seedOffset || 0));
  // Random picks from: find-item, exercise, math
  const roll = rng();
  const challengeType = roll < 0.35 ? 'find-item' : roll < 0.7 ? 'exercise' : 'math';

  if (challengeType === 'exercise') {
    const pool = filterByDifficulty(EXERCISES, difficulty);
    const exercise = pool[Math.floor(rng() * pool.length)];
    return { challengeType: 'exercise', exercise: exercise.id };
  } else if (challengeType === 'find-item') {
    const pool = filterByDifficulty(ITEMS, difficulty);
    const item = pool[Math.floor(rng() * pool.length)];
    return { challengeType: 'find-item', item: item.id };
  } else {
    return { challengeType: 'math', difficulty };
  }
}

// ============================================================
// FORM SELECTORS
// ============================================================
let selectedMode = 'random';
let selectedRepeat = 'once';
let selectedDifficulty = 'medium';

$$('.mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    $$('.mode-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedMode = btn.dataset.mode;
    $('#item-options').classList.toggle('hidden', selectedMode !== 'find-item');
    $('#exercise-options').classList.toggle('hidden', selectedMode !== 'exercise');
  });
});

$$('.repeat-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    $$('.repeat-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedRepeat = btn.dataset.repeat;
    $('#custom-days').classList.toggle('hidden', selectedRepeat !== 'custom');
  });
});

$$('.diff-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    $$('.diff-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedDifficulty = btn.dataset.diff;
  });
});

// Sound selector
$('#sound-select').addEventListener('change', (e) => {
  $('#custom-sound-upload').classList.toggle('hidden', e.target.value !== 'custom');
});

$('#custom-sound-file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.customSound = reader.result;
    state.customSoundName = file.name;
    localStorage.setItem('wakeup-custom-sound', reader.result);
    localStorage.setItem('wakeup-custom-sound-name', file.name);
    $('#custom-sound-name').textContent = `Loaded: ${file.name}`;
  };
  reader.readAsDataURL(file);
});

if (state.customSoundName) {
  $('#custom-sound-name').textContent = `Loaded: ${state.customSoundName}`;
}

// Preview sound
$('#btn-preview-sound').addEventListener('click', () => {
  const type = $('#sound-select').value;
  const previewCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (type === 'custom' && state.customSound) {
    playCustomSound(previewCtx, 2000);
  } else {
    playSynthSound(previewCtx, type, 0.5);
    setTimeout(() => previewCtx.close(), 2500);
  }
});

// Collapsible panels (hidden by default)
function setupCollapsible(toggleId, panelId, storageKey) {
  const panel = $(`#${panelId}`);
  const toggle = $(`#${toggleId}`);
  const collapsed = localStorage.getItem(storageKey) !== 'open';
  if (collapsed) panel.classList.add('collapsed');
  toggle.addEventListener('click', () => {
    panel.classList.toggle('collapsed');
    localStorage.setItem(storageKey, panel.classList.contains('collapsed') ? 'closed' : 'open');
  });
}
setupCollapsible('stats-toggle', 'stats-banner', 'wakeup-stats-open');
setupCollapsible('tomorrow-toggle', 'tomorrow-preview', 'wakeup-tomorrow-open');

// Gradual wake-up toggle
$('#gradual-row').addEventListener('click', () => {
  const checkbox = $('#gradual-toggle');
  checkbox.checked = !checkbox.checked;
  $('#gradual-row').classList.toggle('on', checkbox.checked);
});

// Sleep hours
$('#sleep-hours').value = state.sleepHours;
$('#sleep-hours').addEventListener('change', (e) => {
  state.sleepHours = parseInt(e.target.value);
  localStorage.setItem('wakeup-sleep-hours', state.sleepHours);
  updateBedtimeDisplay();
});

// ============================================================
// ALARM MANAGEMENT
// ============================================================
function renderAlarms() {
  const list = $('#alarms-list');
  list.innerHTML = '';
  state.alarms.forEach((alarm, i) => {
    const div = document.createElement('div');
    div.className = 'alarm-item';
    let challengeText = '';
    if (alarm.mode === 'random') {
      challengeText = '<span class="challenge-tag-inline">RANDOM</span> Changes daily';
    } else if (alarm.mode === 'multi') {
      challengeText = '<span class="challenge-tag-inline">MULTI</span> Multi-step chain';
    } else if (alarm.mode === 'math') {
      challengeText = '<span class="challenge-tag-inline">MATH</span> Solve problems';
    } else if (alarm.mode === 'find-item') {
      const item = ITEMS.find((it) => it.id === alarm.item);
      challengeText = `<span class="challenge-tag-inline">FIND</span> ${item ? item.icon + ' ' + item.name : alarm.item}`;
    } else {
      const ex = EXERCISES.find((e) => e.id === alarm.exercise);
      challengeText = `<span class="challenge-tag-inline">EXERCISE</span> ${ex ? ex.name : alarm.exercise}`;
    }

    let repeatText = '';
    if (alarm.repeat && alarm.repeat !== 'once') {
      repeatText = `<span class="repeat-badge">${alarm.repeat.toUpperCase()}</span>`;
    }
    const diffClass = alarm.difficulty || 'medium';

    div.innerHTML = `
      <div class="alarm-info">
        <span class="time">${alarm.time}</span>
        <span class="challenge">${challengeText}<span class="diff-badge ${diffClass}">${diffClass.toUpperCase()}</span>${repeatText}</span>
      </div>
      <button class="btn-delete" data-index="${i}">REMOVE</button>
    `;
    list.appendChild(div);
  });
  list.querySelectorAll('.btn-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.alarms.splice(parseInt(btn.dataset.index), 1);
      saveAlarms();
      renderAlarms();
      updateBedtimeDisplay();
    });
  });
  updateBedtimeDisplay();
  updateTomorrowPreview();
}

function saveAlarms() {
  _origSaveAlarms();
}

$('#btn-set-alarm').addEventListener('click', () => {
  const time = $('#alarm-time').value;
  if (!time) return;

  let customDays = [];
  if (selectedRepeat === 'custom') {
    customDays = Array.from($$('#custom-days input:checked')).map((cb) => parseInt(cb.value));
  }

  const alarm = {
    time,
    mode: selectedMode,
    repeat: selectedRepeat,
    customDays,
    difficulty: selectedDifficulty,
    item: selectedMode === 'find-item' ? $('#item-select').value : null,
    exercise: selectedMode === 'exercise' ? $('#exercise-select').value : null,
    sound: $('#sound-select').value,
    gradual: $('#gradual-toggle').checked,
    firedToday: null,
  };

  state.alarms.push(alarm);
  saveAlarms();
  renderAlarms();
  $('#alarm-time').value = '';
});

renderAlarms();

// ============================================================
// STATS
// ============================================================
function saveHistory() {
  _origSaveHistory();
}

function getStreak() {
  const days = [...new Set(state.history.map((h) => h.date))].sort().reverse();
  if (days.length === 0) return 0;
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    if (days.includes(ds)) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }
  return streak;
}

function updateStats() {
  const streak = getStreak();
  const total = state.history.length;
  const times = state.history.map((h) => h.elapsed).filter((t) => t > 0);
  const fastest = times.length > 0 ? Math.min(...times) : null;
  const exerciseCount = state.history.filter((h) => h.challengeType === 'exercise').length;

  $('#stat-streak').textContent = streak;
  $('#stat-total').textContent = total;
  $('#stat-fastest').textContent = fastest !== null ? fastest : '--';
  $('#stat-exercises').textContent = exerciseCount;

  // Calendar heatmap (last 30 days)
  const cal = $('#streak-calendar');
  cal.innerHTML = '';
  const today = new Date();
  const daySet = new Set(state.history.map((h) => h.date));
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    const div = document.createElement('div');
    div.className = 'streak-day';
    if (daySet.has(ds)) div.classList.add('active');
    if (i === 0) div.classList.add('today');
    div.title = ds;
    cal.appendChild(div);
  }
}
updateStats();

// ============================================================
// TOMORROW'S PREVIEW
// ============================================================
function updateTomorrowPreview() {
  const container = $('#tomorrow-preview');
  const content = $('#tomorrow-content');
  const randomAlarms = state.alarms.filter((a) => a.mode === 'random');
  if (randomAlarms.length === 0) {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');

  // Use tomorrow's seed
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowSeed = tomorrow.getFullYear() * 10000 + (tomorrow.getMonth() + 1) * 100 + tomorrow.getDate();

  let html = '';
  randomAlarms.forEach((alarm, i) => {
    const rng = seededRandom(tomorrowSeed + i * 777);
    const roll = rng();
    const type = roll < 0.35 ? 'find-item' : roll < 0.7 ? 'exercise' : 'math';
    const pool = type === 'find-item' ? filterByDifficulty(ITEMS, alarm.difficulty) :
                 type === 'exercise' ? filterByDifficulty(EXERCISES, alarm.difficulty) : null;

    if (type === 'find-item' && pool) {
      const item = pool[Math.floor(rng() * pool.length)];
      html += `<div>${alarm.time} — Find <span class="highlight">${item.icon} ${item.name}</span></div>`;
    } else if (type === 'exercise' && pool) {
      const ex = pool[Math.floor(rng() * pool.length)];
      html += `<div>${alarm.time} — <span class="highlight">${ex.name}</span></div>`;
    } else {
      html += `<div>${alarm.time} — <span class="highlight">Math Problems</span></div>`;
    }
  });
  content.innerHTML = html;
}
updateTomorrowPreview();

// ============================================================
// BEDTIME REMINDER
// ============================================================
function getEarliestAlarmMinutes() {
  if (state.alarms.length === 0) return null;
  let earliest = Infinity;
  state.alarms.forEach((a) => {
    const [h, m] = a.time.split(':').map(Number);
    let mins = h * 60 + m;
    earliest = Math.min(earliest, mins);
  });
  return earliest;
}

function updateBedtimeDisplay() {
  const display = $('#bedtime-display');
  if (state.sleepHours === 0 || state.alarms.length === 0) {
    display.textContent = '';
    return;
  }
  const earliest = getEarliestAlarmMinutes();
  if (earliest === null) { display.textContent = ''; return; }
  let bedMins = earliest - state.sleepHours * 60;
  if (bedMins < 0) bedMins += 1440;
  const bh = Math.floor(bedMins / 60).toString().padStart(2, '0');
  const bm = (bedMins % 60).toString().padStart(2, '0');
  display.textContent = `SUGGESTED BEDTIME: ${bh}:${bm}`;
}
updateBedtimeDisplay();

function checkBedtime(now) {
  if (state.sleepHours === 0 || state.alarms.length === 0 || state.bedtimeShown || state.activeAlarm) return;
  const earliest = getEarliestAlarmMinutes();
  if (earliest === null) return;
  let bedMins = earliest - state.sleepHours * 60;
  if (bedMins < 0) bedMins += 1440;
  const currentMins = now.getHours() * 60 + now.getMinutes();
  if (currentMins === bedMins) {
    state.bedtimeShown = true;
    const ah = Math.floor(earliest / 60).toString().padStart(2, '0');
    const am = (earliest % 60).toString().padStart(2, '0');
    $('#bedtime-alarm-time').textContent = `${ah}:${am}`;
    $('#bedtime-hours').textContent = state.sleepHours;
    showScreen('bedtime');
    // Reset the flag after a minute so it doesn't keep firing
    setTimeout(() => { state.bedtimeShown = false; }, 120000);
  }
}

$('#btn-dismiss-bedtime').addEventListener('click', () => showScreen('setup'));

// ============================================================
// GRADUAL WAKE-UP
// ============================================================
function checkGradualWakeup(now) {
  if (state.activeAlarm || state.gradualInterval) return;
  const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  const currentMins = now.getHours() * 60 + now.getMinutes();

  state.alarms.forEach((alarm) => {
    if (!alarm.gradual) return;
    const [ah, am] = alarm.time.split(':').map(Number);
    const alarmMins = ah * 60 + am;
    let diff = alarmMins - currentMins;
    if (diff < 0) diff += 1440;
    // 5 minutes before = start gradual
    if (diff <= 5 && diff > 0 && shouldAlarmFireToday(alarm, now)) {
      startGradualWakeup(diff);
    }
  });
}

function startGradualWakeup(minutesBefore) {
  if (state.gradualInterval) return;
  const overlay = $('#gradual-overlay');
  overlay.classList.remove('hidden');
  overlay.style.opacity = '0.95';

  // Start very quiet ambient sound
  state.gradualAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const ctx = state.gradualAudioCtx;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = 'sine';
  osc.frequency.value = 220;
  filter.type = 'lowpass';
  filter.frequency.value = 400;
  gain.gain.value = 0.01;
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start();

  // Gradually increase volume and brighten screen
  let elapsed = 0;
  state.gradualInterval = setInterval(() => {
    elapsed++;
    const progress = Math.min(elapsed / (minutesBefore * 60), 1);
    gain.gain.value = Math.min(0.01 + progress * 0.05, 0.06);
    osc.frequency.value = 220 + progress * 110;
    overlay.style.opacity = Math.max(0.95 - progress * 0.95, 0).toString();

    if (progress >= 1) {
      clearInterval(state.gradualInterval);
      state.gradualInterval = null;
      overlay.classList.add('hidden');
      if (state.gradualAudioCtx) {
        state.gradualAudioCtx.close();
        state.gradualAudioCtx = null;
      }
    }
  }, 1000);
}

// ============================================================
// CHECK ALARMS
// ============================================================
function shouldAlarmFireToday(alarm, now) {
  const day = now.getDay();
  const today = now.toISOString().split('T')[0];
  if (alarm.firedToday === today) return false;

  if (!alarm.repeat || alarm.repeat === 'once') return true;
  if (alarm.repeat === 'daily') return true;
  if (alarm.repeat === 'weekdays') return day >= 1 && day <= 5;
  if (alarm.repeat === 'weekends') return day === 0 || day === 6;
  if (alarm.repeat === 'custom') return alarm.customDays && alarm.customDays.includes(day);
  return true;
}

function checkAlarms(now) {
  if (state.activeAlarm) return;
  const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

  const matchIdx = state.alarms.findIndex((a) => a.time === currentTime && shouldAlarmFireToday(a, now));
  if (matchIdx >= 0) {
    triggerAlarm(state.alarms[matchIdx], matchIdx);
  }
}

// ============================================================
// TRIGGER ALARM
// ============================================================
function triggerAlarm(alarm, alarmIndex) {
  // Stop gradual wake-up
  if (state.gradualInterval) {
    clearInterval(state.gradualInterval);
    state.gradualInterval = null;
  }
  if (state.gradualAudioCtx) {
    state.gradualAudioCtx.close();
    state.gradualAudioCtx = null;
  }
  $('#gradual-overlay').classList.add('hidden');

  const difficulty = alarm.difficulty || 'medium';
  let resolved = { ...alarm, difficulty };
  state.penaltyApplied = false;

  if (alarm.mode === 'random') {
    const daily = getDailyRandomChallenge(alarmIndex || 0, difficulty);
    Object.assign(resolved, daily);
  } else if (alarm.mode === 'multi') {
    // Generate multi-step chain: 2-3 steps
    const rng = seededRandom(getDailySeed() + (alarmIndex || 0) * 999);
    const stepCount = difficulty === 'easy' ? 2 : difficulty === 'hard' ? 3 : 2 + (rng() > 0.5 ? 1 : 0);
    state.multiSteps = [];
    for (let i = 0; i < stepCount; i++) {
      state.multiSteps.push(getDailyRandomChallenge(alarmIndex || 0, difficulty, i * 333 + 111));
    }
    state.multiStepIndex = 0;
    Object.assign(resolved, state.multiSteps[0]);
  } else if (alarm.mode === 'math') {
    resolved.challengeType = 'math';
  }

  state.activeAlarm = resolved;
  state.challengeStartTime = Date.now();

  // Mark as fired today (for recurring alarms)
  alarm.firedToday = new Date().toISOString().split('T')[0];
  saveAlarms();

  showScreen('ringing');
  $('#ringing-time').textContent = alarm.time;

  // Build challenge description
  const descEl = $('#challenge-desc');
  descEl.innerHTML = buildChallengeDesc(resolved, alarm.mode === 'multi');

  // Multi-step dots
  const multiIndicator = $('#multi-step-indicator');
  if (alarm.mode === 'multi') {
    multiIndicator.classList.remove('hidden');
    const dots = $('#step-dots');
    dots.innerHTML = '';
    state.multiSteps.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'step-dot' + (i === 0 ? ' active' : '');
      dot.textContent = i + 1;
      dots.appendChild(dot);
    });
  } else {
    multiIndicator.classList.add('hidden');
  }

  // Start penalty timer
  startPenaltyTimer(alarm);

  // Start alarm sound
  startAlarmSound(alarm.sound || 'siren');
}

function buildChallengeDesc(resolved, isMulti) {
  let prefix = '<span class="challenge-label">DISMISSAL PROTOCOL</span>';
  if (isMulti) prefix = `<span class="challenge-label">STEP ${state.multiStepIndex + 1} OF ${state.multiSteps.length}</span>`;

  if (resolved.challengeType === 'find-item') {
    const item = ITEMS.find((it) => it.id === resolved.item);
    const icon = item ? item.icon : '';
    const name = item ? item.name : resolved.item;
    return `${prefix} Locate and present <span class="highlight">${icon} ${name}</span> to the live camera feed.`;
  } else if (resolved.challengeType === 'exercise') {
    const ex = EXERCISES.find((e) => e.id === resolved.exercise);
    const name = ex ? ex.name : resolved.exercise;
    return `${prefix} Complete <span class="highlight">${name}</span> in front of your camera.`;
  } else {
    return `${prefix} Solve <span class="highlight">math problems</span> to prove you're awake.`;
  }
}

// ============================================================
// SNOOZE PENALTY
// ============================================================
function startPenaltyTimer(alarm) {
  let secondsLeft = 60;
  const timerEl = $('#penalty-timer');
  timerEl.textContent = secondsLeft;

  clearInterval(state.penaltyInterval);
  state.penaltyInterval = setInterval(() => {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(state.penaltyInterval);
      applyPenalty(alarm);
    }
  }, 1000);
}

function applyPenalty(alarm) {
  if (state.penaltyApplied) return;
  state.penaltyApplied = true;
  const penaltyEl = $('#snooze-penalty');
  penaltyEl.innerHTML = '<span class="penalty-label" style="color:var(--danger);">PENALTY APPLIED — Challenge difficulty increased!</span>';

  // Upgrade difficulty
  const resolved = state.activeAlarm;
  if (resolved.challengeType === 'exercise') {
    const ex = EXERCISES.find((e) => e.id === resolved.exercise);
    if (ex) {
      // Double the count
      const upgraded = EXERCISES.find((e) => e.type === ex.type && e.count >= ex.count * 2);
      if (upgraded) {
        resolved.exercise = upgraded.id;
      }
    }
  }
  // For math: we'll add more problems when starting
  // For multi: add an extra step
  if (state.multiSteps.length > 0) {
    state.multiSteps.push(getDailyRandomChallenge(0, 'hard', 9999));
    const dots = $('#step-dots');
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    dot.textContent = state.multiSteps.length;
    dots.appendChild(dot);
  }

  // Update description
  $('#challenge-desc').innerHTML = buildChallengeDesc(resolved, state.multiSteps.length > 0);
}

// ============================================================
// ALARM SOUNDS — LOUD! (Mobile-compatible)
// ============================================================

// Unlock audio on first user interaction (required by mobile browsers)
let audioUnlocked = false;
let persistentCtx = null;

function unlockAudio() {
  if (audioUnlocked) return;
  try {
    persistentCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Play a silent buffer to unlock
    const buf = persistentCtx.createBuffer(1, 1, 22050);
    const src = persistentCtx.createBufferSource();
    src.buffer = buf;
    src.connect(persistentCtx.destination);
    src.start(0);
    // Also create and play a silent HTML audio to unlock that path
    const silentAudio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
    silentAudio.volume = 0.01;
    silentAudio.play().catch(() => {});
    audioUnlocked = true;
  } catch (e) {}
}

// Attach unlock to every possible user gesture
['touchstart', 'touchend', 'mousedown', 'click', 'keydown'].forEach((evt) => {
  document.addEventListener(evt, unlockAudio, { once: false, passive: true });
});

function startAlarmSound(type) {
  try {
    // Reuse persistent context if available, otherwise create new
    if (persistentCtx && persistentCtx.state !== 'closed') {
      state.audioCtx = persistentCtx;
      if (state.audioCtx.state === 'suspended') {
        state.audioCtx.resume();
      }
    } else {
      state.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Also use HTML5 Audio as a fallback alarm (works better on some mobile browsers)
    state.fallbackAudio = createFallbackAudio();

    if (type === 'custom' && state.customSound) {
      playCustomSoundLoop();
    } else {
      playAlarmLoop(type);
    }
  } catch (e) {
    console.warn('Audio not available');
    // Last resort: HTML5 Audio fallback
    state.fallbackAudio = createFallbackAudio();
  }
}

// HTML5 Audio fallback — generates a loud beep WAV
function createFallbackAudio() {
  try {
    const sampleRate = 22050;
    const duration = 1.5;
    const numSamples = sampleRate * duration;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    // WAV header
    const writeStr = (off, str) => { for (let i = 0; i < str.length; i++) view.setUint8(off + i, str.charCodeAt(i)); };
    writeStr(0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    writeStr(8, 'WAVE');
    writeStr(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeStr(36, 'data');
    view.setUint32(40, numSamples * 2, true);

    // Generate loud beep pattern
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const beepOn = (t % 0.4) < 0.25;
      const sample = beepOn ? Math.sin(2 * Math.PI * 880 * t) * 0.9 : 0;
      view.setInt16(44 + i * 2, sample * 32767, true);
    }

    const blob = new Blob([buffer], { type: 'audio/wav' });
    const audio = new Audio(URL.createObjectURL(blob));
    audio.loop = true;
    audio.volume = 1.0;
    audio.play().catch(() => {});
    return audio;
  } catch (e) {
    return null;
  }
}

function playAlarmLoop(type) {
  if (!state.audioCtx || !state.activeAlarm) return;
  // Resume context if suspended (mobile browsers suspend it)
  if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
  playSynthSound(state.audioCtx, type, 1.0);
  const interval = type === 'escalating' ? 2000 : type === 'melody' ? 2500 : 1200;
  state.alarmSoundTimeout = setTimeout(() => playAlarmLoop(type), interval);
}

function playSynthSound(ctx, type, volume) {
  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.value = volume;
  masterGain.connect(ctx.destination);

  if (type === 'siren') {
    // LOUD dual-tone siren
    for (let t = 0; t < 4; t++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now + t * 0.25);
      osc.frequency.linearRampToValueAtTime(1200, now + t * 0.25 + 0.12);
      osc.frequency.linearRampToValueAtTime(800, now + t * 0.25 + 0.24);
      g.gain.setValueAtTime(0.35, now + t * 0.25);
      g.gain.setValueAtTime(0.35, now + t * 0.25 + 0.2);
      g.gain.linearRampToValueAtTime(0.001, now + t * 0.25 + 0.24);
      osc.connect(g); g.connect(masterGain);
      osc.start(now + t * 0.25); osc.stop(now + t * 0.25 + 0.25);
    }
    // Sub bass hit for physical impact
    const sub = ctx.createOscillator();
    const sg = ctx.createGain();
    sub.type = 'sine'; sub.frequency.value = 80;
    sg.gain.setValueAtTime(0.5, now);
    sg.gain.exponentialRampToValueAtTime(0.001, now + 1);
    sub.connect(sg); sg.connect(masterGain);
    sub.start(now); sub.stop(now + 1);
  }

  else if (type === 'buzzer') {
    // Classic harsh buzzer — LOUD
    for (let i = 0; i < 6; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = 440 + (i % 2) * 440;
      g.gain.setValueAtTime(0.3, now + i * 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.12);
      osc.connect(g); g.connect(masterGain);
      osc.start(now + i * 0.15); osc.stop(now + i * 0.15 + 0.13);
    }
  }

  else if (type === 'melody') {
    // Musical but insistent melody
    const notes = [523, 659, 784, 1047, 784, 659, 523, 659];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.25, now + i * 0.28);
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.28 + 0.25);
      osc.connect(g); g.connect(masterGain);
      osc.start(now + i * 0.28); osc.stop(now + i * 0.28 + 0.27);
    });
  }

  else if (type === 'escalating') {
    // Gets louder and higher pitched
    for (let i = 0; i < 8; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = i < 4 ? 'square' : 'sawtooth';
      osc.frequency.value = 400 + i * 100;
      const vol = 0.1 + i * 0.04;
      g.gain.setValueAtTime(vol, now + i * 0.2);
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.2 + 0.18);
      osc.connect(g); g.connect(masterGain);
      osc.start(now + i * 0.2); osc.stop(now + i * 0.2 + 0.19);
    }
  }

  else if (type === 'voice') {
    // Simulated "WAKE UP" using formant synthesis
    // W sound
    const w = ctx.createOscillator();
    const wg = ctx.createGain();
    const wf = ctx.createBiquadFilter();
    w.type = 'sawtooth'; w.frequency.value = 150;
    wf.type = 'bandpass'; wf.frequency.value = 300; wf.Q.value = 5;
    wg.gain.setValueAtTime(0, now);
    wg.gain.linearRampToValueAtTime(0.3, now + 0.1);
    wg.gain.linearRampToValueAtTime(0, now + 0.2);
    w.connect(wf); wf.connect(wg); wg.connect(masterGain);
    w.start(now); w.stop(now + 0.25);

    // AY sound
    const ay = ctx.createOscillator();
    const ayg = ctx.createGain();
    const ayf = ctx.createBiquadFilter();
    ay.type = 'sawtooth'; ay.frequency.value = 180;
    ayf.type = 'bandpass'; ayf.frequency.value = 700; ayf.Q.value = 3;
    ayg.gain.setValueAtTime(0.3, now + 0.15);
    ayg.gain.setValueAtTime(0.3, now + 0.4);
    ayg.gain.linearRampToValueAtTime(0.001, now + 0.5);
    ay.connect(ayf); ayf.connect(ayg); ayg.connect(masterGain);
    ay.start(now + 0.15); ay.stop(now + 0.55);

    // K + UH sound
    const k = ctx.createOscillator();
    const kg = ctx.createGain();
    k.type = 'square'; k.frequency.value = 2000;
    kg.gain.setValueAtTime(0.15, now + 0.55);
    kg.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    k.connect(kg); kg.connect(masterGain);
    k.start(now + 0.55); k.stop(now + 0.65);

    const uh = ctx.createOscillator();
    const uhg = ctx.createGain();
    const uhf = ctx.createBiquadFilter();
    uh.type = 'sawtooth'; uh.frequency.value = 160;
    uhf.type = 'bandpass'; uhf.frequency.value = 500; uhf.Q.value = 3;
    uhg.gain.setValueAtTime(0.3, now + 0.6);
    uhg.gain.setValueAtTime(0.3, now + 0.9);
    uhg.gain.linearRampToValueAtTime(0.001, now + 1.0);
    uh.connect(uhf); uhf.connect(uhg); uhg.connect(masterGain);
    uh.start(now + 0.6); uh.stop(now + 1.05);

    // P sharp click
    const p = ctx.createOscillator();
    const pg = ctx.createGain();
    p.type = 'square'; p.frequency.value = 3000;
    pg.gain.setValueAtTime(0.2, now + 1.05);
    pg.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    p.connect(pg); pg.connect(masterGain);
    p.start(now + 1.05); p.stop(now + 1.15);

    // Add loud alarm beep after
    for (let i = 0; i < 3; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'square'; osc.frequency.value = 880;
      g.gain.setValueAtTime(0.3, now + 1.3 + i * 0.2);
      g.gain.exponentialRampToValueAtTime(0.001, now + 1.3 + i * 0.2 + 0.15);
      osc.connect(g); g.connect(masterGain);
      osc.start(now + 1.3 + i * 0.2); osc.stop(now + 1.3 + i * 0.2 + 0.16);
    }
  }
}

function playCustomSoundLoop() {
  if (!state.customSound || !state.audioCtx) return;
  const audio = new Audio(state.customSound);
  audio.volume = 1.0;
  audio.play().catch(() => {});
  audio.onended = () => {
    if (state.activeAlarm) {
      state.alarmSoundTimeout = setTimeout(playCustomSoundLoop, 500);
    }
  };
}

function playCustomSound(ctx, duration) {
  const audio = new Audio(state.customSound);
  audio.volume = 1.0;
  audio.play();
  setTimeout(() => { audio.pause(); ctx.close(); }, duration);
}

function stopAlarmSound() {
  clearTimeout(state.alarmSoundTimeout);
  clearInterval(state.penaltyInterval);
  // Stop Web Audio
  if (state.audioCtx) {
    // Don't close the persistent context, just stop scheduling
    if (state.audioCtx === persistentCtx) {
      state.audioCtx = null;
    } else {
      state.audioCtx.close().catch(() => {});
      state.audioCtx = null;
    }
  }
  // Stop fallback HTML5 audio
  if (state.fallbackAudio) {
    state.fallbackAudio.pause();
    state.fallbackAudio.currentTime = 0;
    state.fallbackAudio = null;
  }
}

// ============================================================
// START CHALLENGE
// ============================================================
$('#btn-start-challenge').addEventListener('click', () => {
  clearInterval(state.penaltyInterval);
  const alarm = state.activeAlarm;
  if (alarm.challengeType === 'find-item') startFindItemChallenge(alarm);
  else if (alarm.challengeType === 'exercise') startExerciseChallenge(alarm);
  else if (alarm.challengeType === 'math') startMathChallenge(alarm);
});

// ============================================================
// FIND ITEM CHALLENGE
// ============================================================
async function startFindItemChallenge(alarm) {
  showScreen('find-item');
  const item = ITEMS.find((it) => it.id === alarm.item);
  $('#find-item-name').textContent = item ? `${item.icon} ${item.name}` : alarm.item;

  // Multi progress
  renderMultiProgress('find-multi-progress');

  const video = $('#find-video');
  const canvas = $('#find-canvas');
  const ctx = canvas.getContext('2d');

  ['check-camera', 'check-movement', 'check-item'].forEach((id) => {
    $(`#${id}`).classList.remove('passed');
  });

  try {
    state.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: 640, height: 480 },
    });
    video.srcObject = state.cameraStream;
    await video.play();
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    $('#find-status').textContent = 'CAMERA ACTIVE — SHOW THE ITEM';
    markCheck('check-camera');
  } catch (err) {
    $('#find-status').textContent = 'CAMERA ACCESS DENIED';
    return;
  }

  const tsInterval = setInterval(() => {
    $('#live-timestamp').textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
  }, 1000);

  let lastFrame = null, motionDetected = false, holdStartTime = null, itemConfirmed = false;
  const HOLD_DURATION = 3000;
  const itemColors = getItemColorProfile(alarm.item);

  function processFrame() {
    if (itemConfirmed) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    if (lastFrame) {
      let diffCount = 0;
      for (let i = 0; i < frame.data.length; i += 16) {
        const diff = Math.abs(frame.data[i] - lastFrame.data[i]) + Math.abs(frame.data[i + 1] - lastFrame.data[i + 1]) + Math.abs(frame.data[i + 2] - lastFrame.data[i + 2]);
        if (diff > 40) diffCount++;
      }
      if (diffCount / (frame.data.length / 16) > 0.02) { motionDetected = true; markCheck('check-movement'); }
    }
    lastFrame = frame;
    const detected = detectItemByColor(frame, itemColors, canvas.width, canvas.height);
    if (detected && motionDetected) {
      if (!holdStartTime) { holdStartTime = Date.now(); $('#find-countdown').classList.remove('hidden'); }
      const elapsed = Date.now() - holdStartTime;
      const remaining = Math.ceil((HOLD_DURATION - elapsed) / 1000);
      $('#find-countdown').textContent = remaining;
      $('#find-status').textContent = `ITEM DETECTED — HOLD STEADY... ${remaining}s`;
      if (elapsed >= HOLD_DURATION) {
        itemConfirmed = true;
        markCheck('check-item');
        clearInterval(tsInterval);
        $('#find-countdown').textContent = '\u2713';
        $('#find-status').textContent = 'ITEM CONFIRMED';
        setTimeout(() => { stopCamera(); onChallengeStepDone(); }, 1000);
        return;
      }
    } else {
      if (holdStartTime) { holdStartTime = null; $('#find-countdown').classList.add('hidden'); $('#find-status').textContent = 'KEEP THE ITEM IN FRAME...'; }
    }
    requestAnimationFrame(processFrame);
  }
  requestAnimationFrame(processFrame);
}

function getItemColorProfile(itemId) {
  const profiles = {
    plant: { hueMin: 60, hueMax: 170, satMin: 30, valMin: 30, minArea: 0.05 },
    fruit: { hueMin: 0, hueMax: 60, satMin: 50, valMin: 50, minArea: 0.02 },
    banana: { hueMin: 30, hueMax: 65, satMin: 40, valMin: 50, minArea: 0.02 },
    book: { detectByEdges: true, minArea: 0.04 },
    notebook: { detectByEdges: true, minArea: 0.04 },
  };
  return profiles[itemId] || { detectBySize: true, minArea: 0.03 };
}

function detectItemByColor(imageData, profile, width, height) {
  const data = imageData.data;
  const cx1 = Math.floor(width * 0.2), cx2 = Math.floor(width * 0.8);
  const cy1 = Math.floor(height * 0.2), cy2 = Math.floor(height * 0.8);
  let matchCount = 0, edgeCount = 0;
  for (let y = cy1; y < cy2; y += 2) {
    for (let x = cx1; x < cx2; x += 2) {
      const i = (y * width + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      if (profile.hueMin !== undefined) {
        const hsv = rgbToHsv(r, g, b);
        if (hsv[0] >= profile.hueMin && hsv[0] <= profile.hueMax && hsv[1] >= profile.satMin && hsv[2] >= profile.valMin) matchCount++;
      } else if (profile.detectByEdges) {
        if (x > cx1 + 2 && y > cy1 + 2) {
          const px = (y * width + (x - 2)) * 4, py = ((y - 2) * width + x) * 4;
          const dx = Math.abs(r - data[px]) + Math.abs(g - data[px + 1]) + Math.abs(b - data[px + 2]);
          const dy = Math.abs(r - data[py]) + Math.abs(g - data[py + 1]) + Math.abs(b - data[py + 2]);
          if (dx + dy > 80) edgeCount++;
        }
      } else {
        const brightness = (r + g + b) / 3;
        if (brightness > 30 && brightness < 240) matchCount++;
      }
    }
  }
  const centerPixels = ((cx2 - cx1) / 2) * ((cy2 - cy1) / 2);
  if (profile.detectByEdges) return edgeCount / centerPixels > 0.08;
  return matchCount / centerPixels > (profile.minArea || 0.03) * 10;
}

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : (d / max) * 100, v = max * 100;
  if (d !== 0) {
    if (max === r) h = 60 * (((g - b) / d) % 6);
    else if (max === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
  }
  if (h < 0) h += 360;
  return [h, s, v];
}

function markCheck(id) { $(`#${id}`).classList.add('passed'); }

// ============================================================
// EXERCISE CHALLENGE
// ============================================================
async function startExerciseChallenge(alarm) {
  showScreen('exercise');
  const ex = EXERCISES.find((e) => e.id === alarm.exercise);
  const exerciseName = ex ? ex.name : alarm.exercise;
  const exerciseType = ex ? ex.type : 'jumping-jacks';
  const targetReps = ex ? ex.count : 10;

  $('#exercise-title').textContent = `Do: ${exerciseName}`;
  $('#rep-target').textContent = targetReps;
  $('#rep-current').textContent = '0';
  $('#exercise-progress').style.width = '0%';
  $('#exercise-progress-glow').style.width = '0%';

  renderMultiProgress('ex-multi-progress');

  ['check-ex-camera', 'check-ex-body', 'check-ex-motion'].forEach((id) => $(`#${id}`).classList.remove('passed'));

  const video = $('#exercise-video');
  const canvas = $('#exercise-canvas');
  const canvasCtx = canvas.getContext('2d');

  try {
    state.cameraStream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
    video.srcObject = state.cameraStream;
    await video.play();
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    $('#exercise-status').textContent = 'LOADING POSE DETECTION...';
    markCheck('check-ex-camera');
  } catch (err) {
    $('#exercise-status').textContent = 'CAMERA ACCESS DENIED';
    return;
  }

  const tsInt = setInterval(() => {
    $('#exercise-live-timestamp').textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
  }, 1000);

  const pose = new Pose({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`,
  });
  pose.setOptions({ modelComplexity: 1, smoothLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });

  let repCount = 0, exerciseState = 'ready', bodyDetected = false, motionFrames = 0;

  const POSE_CONNECTIONS = [[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28]];
  const isDark = state.theme === 'dark';
  const skeletonColor = isDark ? 'rgba(0,240,255,0.6)' : 'rgba(79,70,229,0.7)';
  const landmarkColor = isDark ? 'rgba(255,45,120,0.8)' : 'rgba(225,29,116,0.8)';

  pose.onResults((results) => {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    if (results.poseLandmarks) {
      drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: skeletonColor, lineWidth: 2 });
      drawLandmarks(canvasCtx, results.poseLandmarks, { color: landmarkColor, lineWidth: 1, radius: 3 });
      if (!bodyDetected) { bodyDetected = true; markCheck('check-ex-body'); $('#exercise-status').textContent = `BEGIN — ${exerciseName.toUpperCase()}`; }
      motionFrames++;
      if (motionFrames > 10) markCheck('check-ex-motion');
      const lm = results.poseLandmarks;
      let result;
      if (exerciseType === 'jumping-jacks') result = detectJumpingJack(lm, exerciseState);
      else if (exerciseType === 'pushups') result = detectPushUp(lm, exerciseState);
      else if (exerciseType === 'squats') result = detectSquat(lm, exerciseState);
      if (result && result.newState !== exerciseState) {
        exerciseState = result.newState;
        if (result.counted) { repCount++; onRepCounted(repCount, targetReps, tsInt); }
      }
    }
  });

  async function sendFrame() {
    if (!state.activeAlarm) return;
    await pose.send({ image: video });
    requestAnimationFrame(sendFrame);
  }
  pose.initialize().then(() => { $('#exercise-status').textContent = 'POSE DETECTION READY — START NOW'; sendFrame(); });
}

function detectJumpingJack(lm, s) {
  const armsUp = lm[15].y < lm[11].y && lm[16].y < lm[12].y;
  const armsDown = lm[15].y > lm[11].y + 0.1 && lm[16].y > lm[12].y + 0.1;
  const apart = Math.abs(lm[27].x - lm[28].x) > 0.25;
  const together = Math.abs(lm[27].x - lm[28].x) < 0.15;
  if ((s === 'ready' || s === 'down') && armsUp && apart) return { newState: 'up', counted: false };
  if (s === 'up' && armsDown && together) return { newState: 'down', counted: true };
  return { newState: s, counted: false };
}
function detectPushUp(lm, s) {
  const angle = calcAngle(lm[11], lm[13], lm[15]);
  if ((s === 'ready' || s === 'up') && angle < 110) return { newState: 'down', counted: false };
  if (s === 'down' && angle > 150) return { newState: 'up', counted: true };
  return { newState: s, counted: false };
}
function detectSquat(lm, s) {
  const angle = calcAngle(lm[23], lm[25], lm[27]);
  if ((s === 'ready' || s === 'up') && angle < 120) return { newState: 'down', counted: false };
  if (s === 'down' && angle > 160) return { newState: 'up', counted: true };
  return { newState: s, counted: false };
}
function calcAngle(a, b, c) {
  const ab = { x: a.x - b.x, y: a.y - b.y }, cb = { x: c.x - b.x, y: c.y - b.y };
  const dot = ab.x * cb.x + ab.y * cb.y;
  const mag = Math.sqrt(ab.x ** 2 + ab.y ** 2) * Math.sqrt(cb.x ** 2 + cb.y ** 2);
  return Math.acos(Math.min(1, Math.max(-1, dot / mag))) * (180 / Math.PI);
}

function onRepCounted(current, target, tsInt) {
  $('#rep-current').textContent = current;
  const pct = (current / target) * 100;
  $('#exercise-progress').style.width = `${pct}%`;
  $('#exercise-progress-glow').style.width = `${pct}%`;
  const fb = $('#exercise-feedback');
  fb.textContent = `+1  (${current}/${target})`;
  fb.classList.remove('hidden');
  setTimeout(() => fb.classList.add('hidden'), 800);
  if (current >= target) {
    $('#exercise-status').textContent = 'CHALLENGE COMPLETE';
    if (tsInt) clearInterval(tsInt);
    setTimeout(() => { stopCamera(); onChallengeStepDone(); }, 1500);
  }
}

// ============================================================
// MATH CHALLENGE
// ============================================================
function startMathChallenge(alarm) {
  showScreen('math');
  renderMultiProgress('math-multi-progress');

  const difficulty = alarm.difficulty || 'medium';
  let numProblems = difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 5;
  if (state.penaltyApplied) numProblems += 2;

  const problems = [];
  for (let i = 0; i < numProblems; i++) {
    problems.push(generateMathProblem(difficulty));
  }

  const container = $('#math-problems');
  container.innerHTML = '';
  problems.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'math-problem';
    div.innerHTML = `
      <div class="math-expression">${p.expression} = ?</div>
      <input type="number" class="math-input" data-answer="${p.answer}" data-index="${i}" placeholder="?" />
    `;
    container.appendChild(div);
  });

  $('#math-feedback').classList.add('hidden');
  $('#math-sub').textContent = `Solve all ${numProblems} problems correctly to dismiss.`;
}

function generateMathProblem(difficulty) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let a, b, op, answer, expression;

  if (difficulty === 'easy') {
    a = rand(1, 20); b = rand(1, 20);
    if (Math.random() > 0.5) { op = '+'; answer = a + b; } else { op = '-'; answer = a - b; }
    expression = `${a} ${op} ${b}`;
  } else if (difficulty === 'medium') {
    const type = Math.random();
    if (type < 0.33) { a = rand(10, 50); b = rand(10, 50); op = '+'; answer = a + b; expression = `${a} + ${b}`; }
    else if (type < 0.66) { a = rand(20, 80); b = rand(10, 40); op = '-'; answer = a - b; expression = `${a} - ${b}`; }
    else { a = rand(3, 12); b = rand(3, 12); answer = a * b; expression = `${a} \u00D7 ${b}`; }
  } else {
    const type = Math.random();
    if (type < 0.25) { a = rand(50, 200); b = rand(50, 200); answer = a + b; expression = `${a} + ${b}`; }
    else if (type < 0.5) { a = rand(100, 500); b = rand(50, 200); answer = a - b; expression = `${a} - ${b}`; }
    else if (type < 0.75) { a = rand(6, 25); b = rand(6, 15); answer = a * b; expression = `${a} \u00D7 ${b}`; }
    else {
      b = rand(3, 12); answer = rand(5, 20); a = b * answer;
      expression = `${a} \u00F7 ${b}`;
    }
  }
  return { expression, answer };
}

$('#btn-check-math').addEventListener('click', () => {
  const inputs = $$('.math-input');
  let allCorrect = true;
  inputs.forEach((input) => {
    const userAnswer = parseInt(input.value);
    const correctAnswer = parseInt(input.dataset.answer);
    if (userAnswer === correctAnswer) {
      input.classList.remove('wrong');
      input.classList.add('correct');
      input.disabled = true;
    } else {
      input.classList.remove('correct');
      input.classList.add('wrong');
      allCorrect = false;
    }
  });

  const fb = $('#math-feedback');
  fb.classList.remove('hidden');
  if (allCorrect) {
    fb.className = 'math-feedback success';
    fb.textContent = 'ALL CORRECT — CHALLENGE COMPLETE!';
    setTimeout(() => onChallengeStepDone(), 1500);
  } else {
    fb.className = 'math-feedback error';
    fb.textContent = 'INCORRECT — TRY AGAIN';
    setTimeout(() => fb.classList.add('hidden'), 2000);
  }
});

// ============================================================
// MULTI-STEP HANDLING
// ============================================================
function renderMultiProgress(containerId) {
  const el = $(`#${containerId}`);
  if (state.multiSteps.length <= 1) { el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  el.innerHTML = '';
  state.multiSteps.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    if (i < state.multiStepIndex) dot.classList.add('done');
    if (i === state.multiStepIndex) dot.classList.add('active');
    dot.textContent = i + 1;
    el.appendChild(dot);
  });
}

function onChallengeStepDone() {
  if (state.multiSteps.length > 0 && state.multiStepIndex < state.multiSteps.length - 1) {
    // More steps to go
    state.multiStepIndex++;
    const nextStep = state.multiSteps[state.multiStepIndex];
    Object.assign(state.activeAlarm, nextStep);

    // Update multi-step dots on ringing screen
    const dots = $$('#step-dots .step-dot');
    dots.forEach((d, i) => {
      d.classList.remove('active', 'done');
      if (i < state.multiStepIndex) d.classList.add('done');
      if (i === state.multiStepIndex) d.classList.add('active');
    });

    // Show brief transition then start next challenge
    showScreen('ringing');
    $('#challenge-desc').innerHTML = buildChallengeDesc(state.activeAlarm, true);
    $('#snooze-penalty').innerHTML = '<span class="penalty-label" style="color:var(--success);">Step completed! Next challenge loading...</span>';

    setTimeout(() => {
      const alarm = state.activeAlarm;
      if (alarm.challengeType === 'find-item') startFindItemChallenge(alarm);
      else if (alarm.challengeType === 'exercise') startExerciseChallenge(alarm);
      else if (alarm.challengeType === 'math') startMathChallenge(alarm);
    }, 2000);
  } else {
    challengeComplete();
  }
}

// ============================================================
// CHALLENGE COMPLETE
// ============================================================
function challengeComplete() {
  stopAlarmSound();
  const alarm = state.activeAlarm;
  const elapsed = Math.round((Date.now() - state.challengeStartTime) / 1000);

  // Record history
  const historyEntry = {
    date: new Date().toISOString().split('T')[0],
    time: alarm.time,
    challengeType: alarm.challengeType,
    difficulty: alarm.difficulty,
    elapsed,
    penaltyApplied: state.penaltyApplied,
    multiSteps: state.multiSteps.length || 1,
  };
  state.history.push(historyEntry);
  saveHistory();

  // Handle recurring vs one-time alarms
  const idx = state.alarms.findIndex((a) => a.time === alarm.time);
  if (idx >= 0) {
    if (!state.alarms[idx].repeat || state.alarms[idx].repeat === 'once') {
      state.alarms.splice(idx, 1);
    }
  }
  saveAlarms();
  renderAlarms();
  updateStats();

  showScreen('success');
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  let challengeDesc;
  if (alarm.challengeType === 'find-item') {
    const item = ITEMS.find((it) => it.id === alarm.item);
    challengeDesc = item ? `${item.icon} ${item.name}` : alarm.item;
  } else if (alarm.challengeType === 'exercise') {
    const ex = EXERCISES.find((e) => e.id === alarm.exercise);
    challengeDesc = ex ? ex.name : alarm.exercise;
  } else {
    challengeDesc = 'Math Problems';
  }

  const streakNow = getStreak();
  const penaltyText = state.penaltyApplied ? ' (PENALTY APPLIED)' : '';

  $('#success-stats').innerHTML = `
    <div><span class="stat-label">ALARM TIME:</span> <span class="stat-value">${alarm.time}</span></div>
    <div><span class="stat-label">CHALLENGE:</span> <span class="stat-value">${challengeDesc}${penaltyText}</span></div>
    <div><span class="stat-label">STEPS:</span> <span class="stat-value">${state.multiSteps.length || 1}</span></div>
    <div><span class="stat-label">DIFFICULTY:</span> <span class="stat-value">${(alarm.difficulty || 'medium').toUpperCase()}</span></div>
    <div><span class="stat-label">TIME TO DISMISS:</span> <span class="stat-value">${minutes}m ${seconds}s</span></div>
    <div><span class="stat-label">STREAK:</span> <span class="stat-value">${streakNow} days</span></div>
    <div><span class="stat-label">VERIFICATION:</span> <span class="stat-value">LIVE CAMERA FEED</span></div>
  `;

  // Prepare share text
  state._lastResult = {
    time: alarm.time, challenge: challengeDesc, elapsed: `${minutes}m ${seconds}s`,
    streak: streakNow, difficulty: alarm.difficulty, steps: state.multiSteps.length || 1,
  };

  state.activeAlarm = null;
  state.multiSteps = [];
  state.multiStepIndex = 0;
  $('#share-modal').classList.add('hidden');
}

// ============================================================
// SHARE RESULTS
// ============================================================
$('#btn-share').addEventListener('click', () => {
  const r = state._lastResult;
  if (!r) return;
  const text = [
    `WAKE // UP — Alarm Dismissed!`,
    ``,
    `Alarm: ${r.time}`,
    `Challenge: ${r.challenge}`,
    `Difficulty: ${(r.difficulty || 'medium').toUpperCase()}`,
    `Steps: ${r.steps}`,
    `Time to dismiss: ${r.elapsed}`,
    `Streak: ${r.streak} days`,
    ``,
    `Can you beat my time? wakeup.app`,
  ].join('\n');

  $('#share-text').value = text;
  $('#share-modal').classList.remove('hidden');
});

$('#btn-copy-share').addEventListener('click', () => {
  const textarea = $('#share-text');
  textarea.select();
  navigator.clipboard.writeText(textarea.value).then(() => {
    $('#btn-copy-share').querySelector('.btn-text').textContent = 'COPIED!';
    setTimeout(() => {
      $('#btn-copy-share').querySelector('.btn-text').textContent = 'COPY TO CLIPBOARD';
    }, 2000);
  });
});

$('#btn-back-home').addEventListener('click', () => showScreen('setup'));

// ============================================================
// CAMERA
// ============================================================
function stopCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach((t) => t.stop());
    state.cameraStream = null;
  }
}

// ============================================================
// DOUBLE-CLICK TO TEST
// ============================================================
$('#current-time').addEventListener('dblclick', () => {
  if (state.alarms.length > 0 && !state.activeAlarm) {
    triggerAlarm(state.alarms[0], 0);
  }
});

// ============================================================
// INIT
// ============================================================
// Clear fired-today flags at midnight
setInterval(() => {
  const today = new Date().toISOString().split('T')[0];
  state.alarms.forEach((a) => {
    if (a.firedToday && a.firedToday !== today) a.firedToday = null;
  });
  saveAlarms();
}, 60000);
