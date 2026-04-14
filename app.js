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
  { id: 'watch', name: 'A Watch / Clock', icon: '\u231A', category: 'clothing', difficulty: 'medium' },
  { id: 'backpack', name: 'A Backpack', icon: '\uD83C\uDF92', category: 'clothing', difficulty: 'medium' },
  { id: 'scarf', name: 'A Scarf / Tie', icon: '\uD83E\uDDE3', category: 'clothing', difficulty: 'hard' },
  // Home
  { id: 'plant', name: 'A Plant', icon: '\uD83C\uDF3F', category: 'home', difficulty: 'easy' },
  { id: 'remote', name: 'A TV Remote', icon: '\uD83D\uDCFA', category: 'home', difficulty: 'easy' },
  { id: 'umbrella', name: 'An Umbrella', icon: '\u2602\uFE0F', category: 'home', difficulty: 'medium' },
  { id: 'stuffed-animal', name: 'A Stuffed Animal', icon: '\uD83E\uDDF8', category: 'home', difficulty: 'hard' },
  // Kitchen
  { id: 'cup', name: 'A Cup / Mug', icon: '\u2615', category: 'kitchen', difficulty: 'easy' },
  { id: 'spoon', name: 'A Spoon', icon: '\uD83E\uDD44', category: 'kitchen', difficulty: 'easy' },
  { id: 'fork', name: 'A Fork', icon: '\uD83C\uDF74', category: 'kitchen', difficulty: 'easy' },
  { id: 'plate', name: 'A Plate / Bowl', icon: '\uD83C\uDF7D\uFE0F', category: 'kitchen', difficulty: 'medium' },
  { id: 'bottle', name: 'A Bottle', icon: '\uD83C\uDF76', category: 'kitchen', difficulty: 'easy' },
  { id: 'fruit', name: 'A Piece of Fruit', icon: '\uD83C\uDF4E', category: 'kitchen', difficulty: 'medium' },
  { id: 'banana', name: 'A Banana', icon: '\uD83C\uDF4C', category: 'kitchen', difficulty: 'medium' },
  // Bathroom
  { id: 'toothbrush', name: 'A Toothbrush', icon: '\uD83E\uDEA5', category: 'bathroom', difficulty: 'medium' },
  // Desk
  { id: 'book', name: 'A Book', icon: '\uD83D\uDCD6', category: 'desk', difficulty: 'easy' },
  { id: 'notebook', name: 'A Notebook', icon: '\uD83D\uDCD3', category: 'desk', difficulty: 'easy' },
  { id: 'scissors', name: 'Scissors', icon: '\u2702\uFE0F', category: 'desk', difficulty: 'hard' },
  { id: 'mouse', name: 'A Computer Mouse', icon: '\uD83D\uDDB1\uFE0F', category: 'desk', difficulty: 'medium' },
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

const TYPING_PARAGRAPHS = [
  "The human brain is the most complex organ in the body, containing approximately 86 billion neurons. Each neuron can form thousands of connections with other neurons, creating an intricate network that processes information at remarkable speeds. This network is responsible for everything from basic bodily functions to complex thought and creativity. During sleep, the brain consolidates memories and clears out waste products that accumulate during waking hours. Studies have shown that getting adequate sleep improves learning, problem-solving abilities, and emotional regulation. The brain continues to develop and change throughout life, a property known as neuroplasticity.",
  "Photosynthesis is the process by which plants convert sunlight into chemical energy. Chlorophyll, the green pigment in leaves, absorbs light energy primarily from the red and blue portions of the visible spectrum. This energy drives a series of chemical reactions that convert carbon dioxide and water into glucose and oxygen. The glucose produced serves as fuel for the plant's metabolic processes and growth. Photosynthesis is responsible for producing the oxygen that makes up about 21 percent of Earth's atmosphere. Without this process, life as we know it on Earth would not be possible.",
  "The ocean covers approximately 71 percent of the Earth's surface and contains about 97 percent of all water on the planet. Ocean currents act as a massive conveyor belt, distributing heat energy around the globe and regulating climate patterns. The deep ocean remains one of the least explored regions on Earth, with scientists estimating that over 80 percent of it is unmapped and unobserved. Marine ecosystems support an incredible diversity of life, from microscopic plankton to the largest animal ever known, the blue whale. Coral reefs, sometimes called the rainforests of the sea, support roughly 25 percent of all marine species. Rising ocean temperatures and acidification pose significant threats to these vital ecosystems.",
  "The theory of general relativity, published by Albert Einstein in 1915, fundamentally changed our understanding of gravity. Rather than being a force between masses, gravity is described as the curvature of spacetime caused by mass and energy. This theory predicted several phenomena that were later confirmed, including the bending of light around massive objects and the existence of gravitational waves. Black holes, regions where spacetime curvature becomes so extreme that nothing can escape, are a direct consequence of Einstein's equations. In 2019, the Event Horizon Telescope captured the first-ever image of a black hole, located in the galaxy M87. General relativity remains one of the two pillars of modern physics alongside quantum mechanics.",
  "The Amazon Rainforest is the largest tropical rainforest in the world, spanning across nine countries in South America. It produces approximately 20 percent of the world's oxygen and is home to an estimated 10 percent of all known species on Earth. The forest plays a crucial role in regulating global climate by absorbing massive amounts of carbon dioxide. Indigenous communities have lived in the Amazon for thousands of years, developing sophisticated knowledge of medicinal plants and sustainable living practices. Deforestation, primarily driven by agriculture and logging, threatens the forest's ability to function as a carbon sink. Scientists warn that continued destruction could push the Amazon past a tipping point, transforming it from rainforest into savanna.",
  "The human immune system is a complex network of cells, tissues, and organs that work together to defend the body against harmful pathogens. White blood cells, or leukocytes, are the primary soldiers of the immune system, identifying and destroying foreign invaders. The system has two main components: innate immunity, which provides immediate but non-specific defense, and adaptive immunity, which develops targeted responses to specific threats. Vaccines work by training the adaptive immune system to recognize and fight particular pathogens without causing disease. The gut microbiome, containing trillions of bacteria, plays a significant role in immune function and overall health. Regular exercise, adequate sleep, and proper nutrition all contribute to maintaining a strong immune system.",
  "The history of the internet began in the 1960s with the development of ARPANET, a project funded by the United States Department of Defense. The original network connected just four university computers and was designed to be resilient against partial outages. Tim Berners-Lee invented the World Wide Web in 1989, creating the system of hyperlinked documents that made the internet accessible to everyday users. The introduction of web browsers in the early 1990s sparked explosive growth in internet adoption worldwide. Today, over five billion people use the internet, fundamentally transforming communication, commerce, education, and entertainment. The development of mobile technology has made internet access possible from virtually anywhere on the planet.",
  "Volcanoes are geological formations created when magma from deep within the Earth rises to the surface through cracks in the crust. There are approximately 1,500 potentially active volcanoes worldwide, with about 50 to 70 erupting each year. Volcanic eruptions can be incredibly destructive, producing lava flows, ash clouds, and pyroclastic flows that travel at hundreds of kilometers per hour. However, volcanic activity also provides essential benefits, including the creation of fertile soil and the formation of new land. The Ring of Fire, a horseshoe-shaped zone around the Pacific Ocean, contains approximately 75 percent of the world's active volcanoes. Scientists monitor volcanic activity using seismographs, satellite imagery, and gas measurements to predict eruptions and protect nearby populations.",
  "Music has been a fundamental part of human culture for at least 40,000 years, with ancient flutes carved from bone being among the oldest known instruments. Research shows that listening to music activates multiple areas of the brain simultaneously, including regions responsible for movement, emotion, and memory. Learning to play a musical instrument has been linked to improved cognitive function, enhanced memory, and better academic performance in children. Music therapy is now used in clinical settings to help patients with conditions ranging from depression to Parkinson's disease. Different musical keys and tempos can evoke specific emotional responses, a phenomenon that composers have exploited for centuries. Studies suggest that group musical activities strengthen social bonds and increase feelings of belonging and trust.",
  "Water is essential for all known forms of life and covers about 71 percent of the Earth's surface. A single water molecule consists of two hydrogen atoms bonded to one oxygen atom, creating its characteristic bent shape. This molecular structure gives water unique properties, including a high specific heat capacity that helps regulate temperature in living organisms and environments. Despite its abundance on Earth, only about 2.5 percent of all water is freshwater, and less than 1 percent is easily accessible for human use. The water cycle continuously moves water between the oceans, atmosphere, and land through evaporation, condensation, and precipitation. Climate change is disrupting traditional water cycles, leading to more intense droughts in some regions and flooding in others.",
];

const QUOTES = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Every morning brings new potential, but if you dwell on the misfortunes of the day before, you tend to overlook tremendous opportunities.", author: "Harvey Mackay" },
  { text: "The early morning has gold in its mouth.", author: "Benjamin Franklin" },
  { text: "An early-morning walk is a blessing for the whole day.", author: "Henry David Thoreau" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "It is well to be up before daybreak, for such habits contribute to health, wealth, and wisdom.", author: "Aristotle" },
  { text: "The breeze at dawn has secrets to tell you. Don't go back to sleep.", author: "Rumi" },
  { text: "Lose an hour in the morning, and you will be all day hunting for it.", author: "Richard Whately" },
  { text: "Morning is an important time of day, because how you spend your morning can often tell you what kind of day you are going to have.", author: "Lemony Snicket" },
  { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
  { text: "Don't count the days, make the days count.", author: "Muhammad Ali" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Your limitation — it's only your imagination.", author: "Unknown" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
];

const BADGES = [
  { id: 'first-wake', name: 'First Light', icon: '\uD83C\uDF05', desc: 'Dismiss your first alarm', check: (h) => h.length >= 1 },
  { id: 'streak-3', name: 'Triple Threat', icon: '\uD83D\uDD25', desc: '3-day streak', check: (h, s) => s >= 3 },
  { id: 'streak-7', name: 'Week Warrior', icon: '\u2B50', desc: '7-day streak', check: (h, s) => s >= 7 },
  { id: 'streak-14', name: 'Fortnight Force', icon: '\uD83D\uDCAA', desc: '14-day streak', check: (h, s) => s >= 14 },
  { id: 'streak-30', name: 'Monthly Master', icon: '\uD83C\uDFC6', desc: '30-day streak', check: (h, s) => s >= 30 },
  { id: 'speed-demon', name: 'Speed Demon', icon: '\u26A1', desc: 'Dismiss in under 30 seconds', check: (h) => h.some(e => e.elapsed < 30) },
  { id: 'early-bird', name: 'Early Bird', icon: '\uD83D\uDC26', desc: 'Dismiss an alarm before 6 AM', check: (h) => h.some(e => { const hr = parseInt(e.time); return hr < 6; }) },
  { id: 'night-owl', name: 'Night Owl', icon: '\uD83E\uDD89', desc: 'Dismiss an alarm after 10 PM', check: (h) => h.some(e => { const hr = parseInt(e.time); return hr >= 22; }) },
  { id: 'find-5', name: 'Item Hunter', icon: '\uD83D\uDD0D', desc: 'Complete 5 find-item challenges', check: (h) => h.filter(e => e.challengeType === 'find-item').length >= 5 },
  { id: 'find-20', name: 'Treasure Seeker', icon: '\uD83D\uDC8E', desc: 'Complete 20 find-item challenges', check: (h) => h.filter(e => e.challengeType === 'find-item').length >= 20 },
  { id: 'exercise-5', name: 'Fitness Rookie', icon: '\uD83C\uDFCB\uFE0F', desc: 'Complete 5 exercise challenges', check: (h) => h.filter(e => e.challengeType === 'exercise').length >= 5 },
  { id: 'exercise-20', name: 'Gym Rat', icon: '\uD83E\uDD4A', desc: 'Complete 20 exercise challenges', check: (h) => h.filter(e => e.challengeType === 'exercise').length >= 20 },
  { id: 'math-5', name: 'Calculator', icon: '\uD83E\uDDE0', desc: 'Complete 5 math challenges', check: (h) => h.filter(e => e.challengeType === 'math').length >= 5 },
  { id: 'typing-5', name: 'Keyboard Warrior', icon: '\u2328\uFE0F', desc: 'Complete 5 typing challenges', check: (h) => h.filter(e => e.challengeType === 'typing').length >= 5 },
  { id: 'no-penalty', name: 'Disciplined', icon: '\uD83C\uDF96\uFE0F', desc: 'Dismiss 10 alarms without penalty', check: (h) => h.filter(e => !e.penaltyApplied).length >= 10 },
  { id: 'hard-mode', name: 'Hardcore', icon: '\uD83D\uDC80', desc: 'Complete 5 hard difficulty challenges', check: (h) => h.filter(e => e.difficulty === 'hard').length >= 5 },
  { id: 'total-25', name: 'Quarter Century', icon: '\uD83C\uDF1F', desc: 'Dismiss 25 total alarms', check: (h) => h.length >= 25 },
  { id: 'total-100', name: 'Centurion', icon: '\uD83D\uDE80', desc: 'Dismiss 100 total alarms', check: (h) => h.length >= 100 },
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
  facingMode: 'environment',
  wakeLock: null,
  vibrationInterval: null,
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

// Pre-fill last used username for quick sign-in
(function prefillUsername() {
  const lastUser = localStorage.getItem('wakeup-last-user');
  if (lastUser) {
    $('#login-username').value = lastUser;
    // Focus password field so they can just type and go
    setTimeout(() => $('#login-password').focus(), 100);
  }
})();

// Show existing accounts for quick selection
function renderAccountPicker() {
  const users = getUsers();
  const usernames = Object.keys(users);
  let picker = document.getElementById('account-picker');
  if (!picker) {
    picker = document.createElement('div');
    picker.id = 'account-picker';
    picker.className = 'account-picker';
    // Insert before the login divider ("OR")
    const divider = document.querySelector('.login-divider');
    if (divider) divider.parentNode.insertBefore(picker, divider);
  }
  if (usernames.length === 0) {
    picker.classList.add('hidden');
    return;
  }
  picker.classList.remove('hidden');
  picker.innerHTML = '<div class="account-picker-label">SAVED ACCOUNTS</div>' +
    usernames.map(u => {
      const initials = (users[u].displayName || u).substring(0, 2).toUpperCase();
      const name = users[u].displayName || u;
      return `<button class="account-btn" data-user="${u}">
        <span class="account-avatar">${initials}</span>
        <span class="account-name">${name}</span>
      </button>`;
    }).join('');

  picker.querySelectorAll('.account-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const u = btn.dataset.user;
      $('#login-username').value = u;
      $('#login-password').value = '';
      $('#login-password').focus();
      if (isRegisterMode) $('#btn-toggle-register').click(); // switch to sign-in
      $('#login-error').classList.add('hidden');
    });
  });
}
renderAccountPicker();

$('#btn-toggle-register').addEventListener('click', () => {
  isRegisterMode = !isRegisterMode;
  $('#login-panel-title').textContent = isRegisterMode ? 'CREATE ACCOUNT' : 'SIGN IN';
  $('#btn-login').querySelector('.btn-text').textContent = isRegisterMode ? 'CREATE ACCOUNT' : 'SIGN IN';
  $('#btn-toggle-register').textContent = isRegisterMode ? 'BACK TO SIGN IN' : 'CREATE NEW ACCOUNT';
  $('#register-name-row').classList.toggle('hidden', !isRegisterMode);
  $('#login-error').classList.add('hidden');
  // Hide account picker in register mode
  const picker = document.getElementById('account-picker');
  if (picker) picker.classList.toggle('hidden', isRegisterMode);
});

// Auto-detect: if username exists, sign in; if not, prompt to create account
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
      errorEl.textContent = 'Username already exists. Switch to Sign In.';
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
    localStorage.setItem('wakeup-last-user', username);
    loadUserSession(username, displayName);
  } else {
    // Auto-create: if username doesn't exist, create account automatically
    if (!users[username]) {
      if (password.length < 4) {
        errorEl.textContent = 'Password must be at least 4 characters.';
        errorEl.classList.remove('hidden');
        return;
      }
      users[username] = { password: hashed, displayName: username };
      saveUsers(users);
      setCurrentUser(username);
      localStorage.setItem('wakeup-last-user', username);
      renderAccountPicker();
      loadUserSession(username, username);
      return;
    }
    if (users[username].password !== hashed) {
      errorEl.textContent = 'Wrong password.';
      errorEl.classList.remove('hidden');
      return;
    }
    setCurrentUser(username);
    localStorage.setItem('wakeup-last-user', username);
    loadUserSession(username, users[username].displayName);
  }
});

// Enter key to submit
$('#login-username').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); $('#login-password').focus(); }
});
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

  // Request notification permission so alarms work when app is closed
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }
  // Sync existing alarms to service worker
  syncAlarmsToServiceWorker();
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
  // Pre-fill last username for quick re-login
  const lastUser = localStorage.getItem('wakeup-last-user');
  $('#login-username').value = lastUser || '';
  $('#login-password').value = '';
  $('#login-error').classList.add('hidden');
  if (isRegisterMode) $('#btn-toggle-register').click(); // switch back to sign-in
  renderAccountPicker();
  showScreen('login');
  if (lastUser) setTimeout(() => $('#login-password').focus(), 100);
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
const randomItemOpt = document.createElement('option');
randomItemOpt.value = 'random';
randomItemOpt.textContent = '🎲 Random Item';
itemSelect.appendChild(randomItemOpt);
ITEMS.forEach((item) => {
  const opt = document.createElement('option');
  opt.value = item.id;
  opt.textContent = `${item.icon} ${item.name} [${item.difficulty.toUpperCase()}]`;
  itemSelect.appendChild(opt);
});

const exerciseSelect = $('#exercise-select');
const randomExOpt = document.createElement('option');
randomExOpt.value = 'random';
randomExOpt.textContent = '🎲 Random Exercise';
exerciseSelect.appendChild(randomExOpt);
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
  const match = list.filter((i) => i.difficulty === difficulty);
  return match.length > 0 ? match : list;
}

function getDailyRandomChallenge(alarmIndex, difficulty, seedOffset) {
  const rng = seededRandom(getDailySeed() + alarmIndex * 777 + (seedOffset || 0));
  // Random picks from: find-item, exercise, math, typing
  const roll = rng();
  const challengeType = roll < 0.3 ? 'find-item' : roll < 0.55 ? 'exercise' : roll < 0.8 ? 'math' : 'typing';

  if (challengeType === 'exercise') {
    const pool = filterByDifficulty(EXERCISES, difficulty);
    const exercise = pool[Math.floor(rng() * pool.length)];
    return { challengeType: 'exercise', exercise: exercise.id };
  } else if (challengeType === 'find-item') {
    const pool = filterByDifficulty(ITEMS, difficulty);
    const item = pool[Math.floor(rng() * pool.length)];
    return { challengeType: 'find-item', item: item.id };
  } else if (challengeType === 'typing') {
    return { challengeType: 'typing', difficulty };
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
    updateSelectsForDifficulty();
  });
});

function updateSelectsForDifficulty() {
  // Update item select
  itemSelect.innerHTML = '';
  const filteredItems = filterByDifficulty(ITEMS, selectedDifficulty);
  filteredItems.forEach((item) => {
    const opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = `${item.icon} ${item.name} [${item.difficulty.toUpperCase()}]`;
    itemSelect.appendChild(opt);
  });
  // Update exercise select
  exerciseSelect.innerHTML = '';
  const filteredExercises = filterByDifficulty(EXERCISES, selectedDifficulty);
  filteredExercises.forEach((ex) => {
    const opt = document.createElement('option');
    opt.value = ex.id;
    opt.textContent = `${ex.name} [${ex.difficulty.toUpperCase()}]`;
    exerciseSelect.appendChild(opt);
  });
}

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
setupCollapsible('badges-toggle', 'badges-banner', 'wakeup-badges-open');
setupCollapsible('dashboard-toggle', 'sleep-dashboard', 'wakeup-dashboard-open');
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
      if (alarm.item === 'random') {
        challengeText = '<span class="challenge-tag-inline">FIND</span> 🎲 Random Item';
      } else {
        const item = ITEMS.find((it) => it.id === alarm.item);
        challengeText = `<span class="challenge-tag-inline">FIND</span> ${item ? item.icon + ' ' + item.name : alarm.item}`;
      }
    } else if (alarm.mode === 'exercise') {
      if (alarm.exercise === 'random') {
        challengeText = '<span class="challenge-tag-inline">EXERCISE</span> 🎲 Random Exercise';
      } else {
        const ex = EXERCISES.find((e) => e.id === alarm.exercise);
        challengeText = `<span class="challenge-tag-inline">EXERCISE</span> ${ex ? ex.name : alarm.exercise}`;
      }
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
      <div class="alarm-actions">
        <button class="btn-calendar" data-index="${i}" title="Save to iPhone Calendar">CAL</button>
        <button class="btn-delete" data-index="${i}">REMOVE</button>
      </div>
    `;
    list.appendChild(div);
  });
  list.querySelectorAll('.btn-calendar').forEach((btn) => {
    btn.addEventListener('click', () => {
      const alarm = state.alarms[parseInt(btn.dataset.index)];
      downloadAlarmICS(alarm);
    });
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

function downloadAlarmICS(alarm) {
  const [h, m] = alarm.time.split(':').map(Number);
  const now = new Date();

  // Find next occurrence of this alarm
  let alarmDate = new Date(now);
  alarmDate.setHours(h, m, 0, 0);
  if (alarmDate <= now) alarmDate.setDate(alarmDate.getDate() + 1);

  // For repeating alarms, find the right day
  if (alarm.repeat === 'weekdays') {
    while (alarmDate.getDay() === 0 || alarmDate.getDay() === 6) alarmDate.setDate(alarmDate.getDate() + 1);
  } else if (alarm.repeat === 'weekends') {
    while (alarmDate.getDay() !== 0 && alarmDate.getDay() !== 6) alarmDate.setDate(alarmDate.getDate() + 1);
  }

  const pad = (n) => String(n).padStart(2, '0');
  const formatDate = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

  const endDate = new Date(alarmDate);
  endDate.setMinutes(endDate.getMinutes() + 5);

  // RRULE for repeating alarms
  let rrule = '';
  if (alarm.repeat === 'daily') {
    rrule = 'RRULE:FREQ=DAILY\n';
  } else if (alarm.repeat === 'weekdays') {
    rrule = 'RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR\n';
  } else if (alarm.repeat === 'weekends') {
    rrule = 'RRULE:FREQ=WEEKLY;BYDAY=SA,SU\n';
  } else if (alarm.repeat === 'custom' && alarm.customDays && alarm.customDays.length > 0) {
    const dayMap = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const days = alarm.customDays.map(d => dayMap[d]).join(',');
    rrule = `RRULE:FREQ=WEEKLY;BYDAY=${days}\n`;
  }

  const uid = `wakeup-${alarm.time}-${Date.now()}@wakeup`;
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//WAKE UP//Alarm//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${formatDate(alarmDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `SUMMARY:⏰ WAKE UP — ${alarm.time}`,
    'DESCRIPTION:Open WAKE UP app to dismiss your alarm!',
    rrule ? rrule.trim() : '',
    'BEGIN:VALARM',
    'TRIGGER:PT0S',
    'ACTION:AUDIO',
    'DESCRIPTION:WAKE UP!',
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT1M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Alarm in 1 minute — open WAKE UP app',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean).join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `wakeup-${alarm.time.replace(':', '')}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function showAlarmTip(time) {
  // Don't show if user dismissed it before
  if (localStorage.getItem('wakeup-tip-dismissed')) return;

  let tip = document.getElementById('alarm-tip-modal');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'alarm-tip-modal';
    tip.className = 'alarm-tip-modal';
    document.body.appendChild(tip);
  }
  tip.innerHTML = `
    <div class="alarm-tip-content glass-panel">
      <div class="alarm-tip-icon">⏰</div>
      <h3 class="alarm-tip-title">SET A PHONE ALARM TOO</h3>
      <p class="alarm-tip-text">
        Open your phone's <strong>Clock app</strong> and set an alarm for <strong>${time}</strong>.
      </p>
      <p class="alarm-tip-text">
        Your phone alarm wakes you up with a loud sound.<br>
        Then open <strong>WAKE UP</strong> to complete the challenge and stay awake.
      </p>
      <div class="alarm-tip-actions">
        <button class="btn btn-primary alarm-tip-btn" id="alarm-tip-ok">
          <span class="btn-glow"></span>
          <span class="btn-text">GOT IT</span>
        </button>
        <button class="alarm-tip-dismiss" id="alarm-tip-never">DON'T SHOW AGAIN</button>
      </div>
    </div>
  `;
  tip.classList.remove('hidden');
  document.getElementById('alarm-tip-ok').addEventListener('click', () => {
    tip.classList.add('hidden');
  });
  document.getElementById('alarm-tip-never').addEventListener('click', () => {
    tip.classList.add('hidden');
    localStorage.setItem('wakeup-tip-dismissed', '1');
  });
}

function saveAlarms() {
  _origSaveAlarms();
  syncAlarmsToServiceWorker();
  if (typeof updateKeepAlive === 'function') updateKeepAlive();
}

function syncAlarmsToServiceWorker() {
  if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) return;
  navigator.serviceWorker.controller.postMessage({
    type: 'SYNC_ALARMS',
    alarms: state.alarms,
  });
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

  // Request notification permission so alarm can wake the phone
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
  }

  // On mobile, show tip to set a matching phone alarm
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isMobile = isIOS || /Android/.test(navigator.userAgent);
  if (isMobile) {
    setTimeout(() => {
      showAlarmTip(alarm.time);
    }, 300);
  }
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

function getUnlockedBadges() {
  const streak = getStreak();
  return BADGES.filter(b => b.check(state.history, streak));
}

function updateBadges() {
  const unlocked = getUnlockedBadges();
  const container = $('#badges-grid');
  if (!container) return;
  container.innerHTML = '';
  BADGES.forEach(badge => {
    const isUnlocked = unlocked.some(u => u.id === badge.id);
    const div = document.createElement('div');
    div.className = 'badge-item' + (isUnlocked ? ' unlocked' : ' locked');
    div.innerHTML = `
      <span class="badge-icon">${isUnlocked ? badge.icon : '\uD83D\uDD12'}</span>
      <span class="badge-name">${badge.name}</span>
      <span class="badge-desc">${badge.desc}</span>
    `;
    container.appendChild(div);
  });
  const countEl = $('#badges-count');
  if (countEl) countEl.textContent = `${unlocked.length} / ${BADGES.length}`;
}
updateBadges();

function updateDashboard() {
  const history = state.history;
  if (history.length === 0) return;

  // Avg wake time
  const times = history.map(h => { const [hh, mm] = h.time.split(':').map(Number); return hh * 60 + mm; });
  const avgMin = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
  const avgH = Math.floor(avgMin / 60);
  const avgM = avgMin % 60;
  $('#dash-avg-time').textContent = `${String(avgH).padStart(2, '0')}:${String(avgM).padStart(2, '0')}`;

  // Avg dismiss time
  const dismissTimes = history.map(h => h.elapsed).filter(t => t > 0);
  const avgDismiss = dismissTimes.length > 0 ? Math.round(dismissTimes.reduce((a, b) => a + b, 0) / dismissTimes.length) : 0;
  $('#dash-avg-dismiss').textContent = `${avgDismiss}s`;

  // No-penalty rate
  const noPenalty = history.filter(h => !h.penaltyApplied).length;
  const rate = Math.round((noPenalty / history.length) * 100);
  $('#dash-success-rate').textContent = `${rate}%`;

  // Dismiss time bar chart — last 14 days
  const chart = $('#dashboard-chart');
  const cCtx = chart.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  chart.width = chart.clientWidth * dpr;
  chart.height = 180 * dpr;
  cCtx.scale(dpr, dpr);
  const w = chart.clientWidth;
  const h = 180;
  cCtx.clearRect(0, 0, w, h);

  const today = new Date();
  const dayData = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    const entries = history.filter(e => e.date === ds);
    const avg = entries.length > 0 ? Math.round(entries.reduce((a, e) => a + e.elapsed, 0) / entries.length) : 0;
    dayData.push({ label: `${d.getMonth() + 1}/${d.getDate()}`, value: avg, count: entries.length });
  }

  const maxVal = Math.max(...dayData.map(d => d.value), 30);
  const barW = (w - 40) / 14 - 4;
  const isDark = state.theme === 'dark';
  const barColor = isDark ? 'rgba(124, 92, 245, 0.7)' : 'rgba(109, 40, 217, 0.6)';
  const textColor = isDark ? '#7a70a8' : '#5b4a80';

  cCtx.font = '9px Share Tech Mono, monospace';
  cCtx.fillStyle = textColor;
  cCtx.textAlign = 'center';

  dayData.forEach((d, i) => {
    const x = 20 + i * ((w - 40) / 14) + 2;
    const barH = d.value > 0 ? (d.value / maxVal) * (h - 35) : 0;
    const y = h - 20 - barH;

    cCtx.fillStyle = barColor;
    cCtx.beginPath();
    cCtx.roundRect(x, y, barW, barH, 3);
    cCtx.fill();

    if (d.value > 0) {
      cCtx.fillStyle = isDark ? '#e4e0ff' : '#1e1040';
      cCtx.fillText(`${d.value}s`, x + barW / 2, y - 4);
    }

    cCtx.fillStyle = textColor;
    cCtx.fillText(d.label, x + barW / 2, h - 5);
  });

  // Challenge type breakdown — horizontal bars
  const cChart = $('#challenge-chart');
  const c2 = cChart.getContext('2d');
  cChart.width = cChart.clientWidth * dpr;
  cChart.height = 140 * dpr;
  c2.scale(dpr, dpr);
  const w2 = cChart.clientWidth;
  const h2 = 140;
  c2.clearRect(0, 0, w2, h2);

  const types = [
    { label: 'FIND ITEM', key: 'find-item', color: isDark ? '#a855f7' : '#7e22ce' },
    { label: 'EXERCISE', key: 'exercise', color: isDark ? '#22c55e' : '#16a34a' },
    { label: 'MATH', key: 'math', color: isDark ? '#7c5cf5' : '#6d28d9' },
    { label: 'TYPING', key: 'typing', color: isDark ? '#e040a0' : '#be185d' },
  ];
  const maxCount = Math.max(...types.map(t => history.filter(e => e.challengeType === t.key).length), 1);
  const barH2 = 22;
  const gap = 8;

  types.forEach((t, i) => {
    const count = history.filter(e => e.challengeType === t.key).length;
    const y = 10 + i * (barH2 + gap);
    const bw = count > 0 ? (count / maxCount) * (w2 - 130) : 0;

    c2.fillStyle = textColor;
    c2.font = '10px Share Tech Mono, monospace';
    c2.textAlign = 'right';
    c2.fillText(t.label, 75, y + 15);

    c2.fillStyle = t.color;
    c2.beginPath();
    c2.roundRect(85, y, bw, barH2, 4);
    c2.fill();

    c2.fillStyle = isDark ? '#e4e0ff' : '#1e1040';
    c2.textAlign = 'left';
    c2.fillText(count.toString(), 90 + bw + 5, y + 15);
  });
}
updateDashboard();

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
  const currentTime = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
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
  const currentTime = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

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
  } else if (alarm.mode === 'exercise') {
    resolved.challengeType = 'exercise';
    if (alarm.exercise === 'random') {
      const pool = filterByDifficulty(EXERCISES, difficulty);
      resolved.exercise = pool[Math.floor(Math.random() * pool.length)].id;
    }
  } else if (alarm.mode === 'find-item') {
    resolved.challengeType = 'find-item';
    if (alarm.item === 'random') {
      const pool = filterByDifficulty(ITEMS, difficulty);
      resolved.item = pool[Math.floor(Math.random() * pool.length)].id;
    }
  } else if (alarm.mode === 'typing') {
    resolved.challengeType = 'typing';
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

  // Fire system notification to wake the phone
  fireAlarmNotification(alarm);
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
  } else if (resolved.challengeType === 'typing') {
    return `${prefix} Type an <span class="highlight">educational paragraph</span> accurately to prove you're awake.`;
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
  // Start vibration immediately (works without user gesture on most mobile browsers)
  startVibration();

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

  // On mobile, audio may be blocked until user gesture.
  // Retry playing sound on first touch/click on the ringing screen.
  function retryAudio() {
    if (!state.activeAlarm) return;
    if (state.audioCtx && state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
    if (state.fallbackAudio && state.fallbackAudio.paused) {
      state.fallbackAudio.play().catch(() => {});
    }
    document.removeEventListener('touchstart', retryAudio);
    document.removeEventListener('click', retryAudio);
  }
  document.addEventListener('touchstart', retryAudio, { once: true, passive: true });
  document.addEventListener('click', retryAudio, { once: true, passive: true });
}

function startVibration() {
  if (!navigator.vibrate) return;
  // Vibrate pattern: 500ms on, 300ms off — repeating
  const pattern = [500, 300, 500, 300, 500, 300, 500, 300, 500, 300, 500, 300, 500, 300, 500, 300, 500, 300, 500, 300];
  navigator.vibrate(pattern);
  // Vibration API doesn't loop, so repeat every 16 seconds
  state.vibrationInterval = setInterval(() => {
    if (!state.activeAlarm) { clearInterval(state.vibrationInterval); navigator.vibrate(0); return; }
    navigator.vibrate(pattern);
  }, 16000);
}

function stopVibration() {
  if (navigator.vibrate) navigator.vibrate(0);
  if (state.vibrationInterval) { clearInterval(state.vibrationInterval); state.vibrationInterval = null; }
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
  stopVibration();
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
// ALARM NOTIFICATION (wakes phone from lock screen)
// ============================================================
function fireAlarmNotification(alarm) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  try {
    const desc = alarm.challengeType === 'find-item' ? 'Find an item!' :
                 alarm.challengeType === 'exercise' ? 'Do your exercise!' :
                 alarm.challengeType === 'typing' ? 'Typing challenge!' : 'Solve math problems!';
    const notif = new Notification('WAKE UP — Alarm!', {
      body: `${alarm.time} — ${desc}`,
      icon: './icons/icon-192.png',
      tag: 'wakeup-alarm',
      requireInteraction: true,
      vibrate: [500, 300, 500, 300, 500],
    });
    notif.onclick = () => { window.focus(); notif.close(); };
    // Auto-close after 2 minutes
    setTimeout(() => notif.close(), 120000);
  } catch (e) {}
}

// Keep-alive: when page becomes visible again, re-check alarms immediately
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    // Re-check alarms in case one was missed while phone was locked
    if (!state.activeAlarm) {
      checkAlarms(new Date());
    }
    // If alarm is active but sound isn't playing, restart it
    if (state.activeAlarm && !state.audioCtx && !state.fallbackAudio) {
      startAlarmSound(state.activeAlarm.sound || 'siren');
    }
    syncAlarmsToServiceWorker();
  }
});

// Sync alarms to SW once it's ready
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(() => syncAlarmsToServiceWorker());
  // Listen for alarm fired by SW when page was closed
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'ALARM_FIRED') {
      // SW fired an alarm while we were away — check and trigger it now
      if (!state.activeAlarm) checkAlarms(new Date());
    }
  });
}

// Request wake lock to prevent phone from sleeping while alarms are set
async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release', () => { state.wakeLock = null; });
  } catch (e) {}
}

// Re-acquire wake lock when page becomes visible
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.alarms.length > 0 && !state.wakeLock) {
    requestWakeLock();
  }
});

// Request wake lock if there are alarms set
if (state.alarms.length > 0) requestWakeLock();

// ============================================================
// SILENT AUDIO KEEP-ALIVE (prevents iOS from suspending the tab)
// ============================================================
let keepAliveAudio = null;
let keepAliveInterval = null;

function startKeepAlive() {
  if (keepAliveAudio) return; // already running
  try {
    // Create a 10-second silent WAV (very small, loops forever)
    const sampleRate = 8000;
    const duration = 10;
    const numSamples = sampleRate * duration;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);
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
    // All samples stay 0 = silence

    const blob = new Blob([buffer], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    keepAliveAudio = new Audio(url);
    keepAliveAudio.loop = true;
    keepAliveAudio.volume = 0.01; // near-silent
    keepAliveAudio.play().catch(() => {});

    // Also periodically nudge the audio context to stay alive
    keepAliveInterval = setInterval(() => {
      if (keepAliveAudio && keepAliveAudio.paused) {
        keepAliveAudio.play().catch(() => {});
      }
    }, 30000);
  } catch (e) {}
}

function stopKeepAlive() {
  if (keepAliveAudio) {
    keepAliveAudio.pause();
    keepAliveAudio.src = '';
    keepAliveAudio = null;
  }
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
  }
}

function updateKeepAlive() {
  if (state.alarms.length > 0) {
    startKeepAlive();
  } else {
    stopKeepAlive();
  }
}

// Start keep-alive if alarms exist
updateKeepAlive();

// ============================================================
// START CHALLENGE
// ============================================================
$('#btn-start-challenge').addEventListener('click', () => {
  clearInterval(state.penaltyInterval);
  const alarm = state.activeAlarm;
  if (alarm.challengeType === 'find-item') startFindItemChallenge(alarm);
  else if (alarm.challengeType === 'exercise') startExerciseChallenge(alarm);
  else if (alarm.challengeType === 'typing') startTypingChallenge(alarm);
  else if (alarm.challengeType === 'math') startMathChallenge(alarm);
});

// ============================================================
// FIND ITEM CHALLENGE — COCO-SSD ML Object Detection
// ============================================================

// Map item IDs to COCO-SSD class labels they should match
const ITEM_COCO_LABELS = {
  watch: ['clock'],
  backpack: ['backpack'],
  scarf: ['tie'],
  plant: ['potted plant'],
  remote: ['remote'],
  umbrella: ['umbrella'],
  'stuffed-animal': ['teddy bear'],
  cup: ['cup'],
  spoon: ['spoon'],
  fork: ['fork'],
  plate: ['bowl'],
  bottle: ['bottle'],
  fruit: ['apple', 'orange', 'banana'],
  banana: ['banana'],
  toothbrush: ['toothbrush'],
  book: ['book'],
  notebook: ['book'],
  scissors: ['scissors'],
  mouse: ['mouse'],
};

let cocoModel = null;
let cocoModelLoading = false;

async function loadCocoModel() {
  if (cocoModel) return cocoModel;
  if (cocoModelLoading) {
    while (cocoModelLoading) await new Promise(r => setTimeout(r, 100));
    return cocoModel;
  }
  cocoModelLoading = true;
  try {
    cocoModel = await cocoSsd.load({ base: 'lite_mobilenet_v2' });
  } catch (e) {
    console.error('COCO-SSD failed to load:', e);
    cocoModel = null;
  }
  cocoModelLoading = false;
  return cocoModel;
}

async function startFindItemChallenge(alarm) {
  showScreen('find-item');
  const item = ITEMS.find((it) => it.id === alarm.item);
  $('#find-item-name').textContent = item ? `${item.icon} ${item.name}` : alarm.item;

  renderMultiProgress('find-multi-progress');

  const video = $('#find-video');
  const canvas = $('#find-canvas');
  const ctx = canvas.getContext('2d');

  ['check-camera', 'check-movement', 'check-item'].forEach((id) => {
    $(`#${id}`).classList.remove('passed');
  });

  const cocoLabels = ITEM_COCO_LABELS[alarm.item] || [];
  const MIN_CONFIDENCE = 0.55;

  $('#find-status').textContent = 'LOADING AI MODEL...';
  const model = await loadCocoModel();

  if (!model) {
    $('#find-status').textContent = 'AI MODEL FAILED TO LOAD — PLEASE RELOAD';
    return;
  }

  try {
    await attachCamera(video);
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    markCheck('check-camera');
  } catch (err) {
    $('#find-status').textContent = 'CAMERA ACCESS DENIED — ' + err.message;
    return;
  }

  $('#find-status').textContent = 'AI READY — SHOW THE ITEM';

  const tsInterval = setInterval(() => {
    $('#live-timestamp').textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
  }, 1000);

  let lastFrame = null, motionDetected = false, holdStartTime = null, itemConfirmed = false;
  const HOLD_DURATION = 3000;
  let detecting = false;

  function drawDetectionBox(prediction) {
    const [x, y, w, h] = prediction.bbox;
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 14px Orbitron, monospace';
    const label = `${prediction.class} ${Math.round(prediction.score * 100)}%`;
    const textW = ctx.measureText(label).width;
    ctx.fillRect(x, y - 22, textW + 10, 22);
    ctx.fillStyle = '#080e1a';
    ctx.fillText(label, x + 5, y - 6);
  }

  async function processFrame() {
    if (itemConfirmed) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Motion detection
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

    if (!detecting) {
      detecting = true;
      try {
        const predictions = await model.detect(video);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        let bestMatch = null;
        let bestWrongLabel = null;
        for (const pred of predictions) {
          if (pred.score < 0.3) continue;
          if (cocoLabels.includes(pred.class) && pred.score >= MIN_CONFIDENCE) {
            if (!bestMatch || pred.score > bestMatch.score) bestMatch = pred;
          } else if (pred.class !== 'person' && pred.score >= MIN_CONFIDENCE) {
            if (!bestWrongLabel || pred.score > bestWrongLabel.score) bestWrongLabel = pred;
          }
        }

        if (bestMatch) drawDetectionBox(bestMatch);

        if (bestMatch && motionDetected) {
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
            detecting = false;
            return;
          }
        } else {
          if (holdStartTime) { holdStartTime = null; $('#find-countdown').classList.add('hidden'); }
          if (bestWrongLabel) {
            $('#find-status').textContent = `WRONG ITEM — detected "${bestWrongLabel.class}", need ${item ? item.name : alarm.item}`;
          } else {
            $('#find-status').textContent = 'LOOKING FOR ITEM...';
          }
        }
      } catch (e) {
        console.error('Detection error:', e);
      }
      detecting = false;
    }

    requestAnimationFrame(processFrame);
  }
  requestAnimationFrame(processFrame);
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
    await attachCamera(video);
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    $('#exercise-status').textContent = 'LOADING POSE DETECTION...';
    markCheck('check-ex-camera');
  } catch (err) {
    $('#exercise-status').textContent = 'CAMERA ACCESS DENIED — ' + err.message;
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
  let lastRepTime = 0;
  const REP_COOLDOWN = 600; // ms minimum between reps to prevent double-counting

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
        const now = Date.now();
        if (result.counted && now - lastRepTime > REP_COOLDOWN) {
          lastRepTime = now;
          repCount++;
          onRepCounted(repCount, targetReps, tsInt);
        }
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
  // Use wrist positions (15,16) relative to shoulders (11,12)
  const armsUp = lm[15].y < lm[11].y - 0.05 && lm[16].y < lm[12].y - 0.05;
  const armsDown = lm[15].y > lm[11].y + 0.08 && lm[16].y > lm[12].y + 0.08;
  // Use ankle positions (27,28) for leg spread
  const legSpread = Math.abs(lm[27].x - lm[28].x);
  const apart = legSpread > 0.18;
  const together = legSpread < 0.13;
  if ((s === 'ready' || s === 'down') && armsUp && apart) return { newState: 'up', counted: false };
  if (s === 'up' && armsDown && together) return { newState: 'down', counted: true };
  return { newState: s, counted: false };
}
function detectPushUp(lm, s) {
  // Use both arms for more reliable detection
  const angleL = calcAngle(lm[11], lm[13], lm[15]);
  const angleR = calcAngle(lm[12], lm[14], lm[16]);
  const angle = (angleL + angleR) / 2;
  if ((s === 'ready' || s === 'up') && angle < 100) return { newState: 'down', counted: false };
  if (s === 'down' && angle > 155) return { newState: 'up', counted: true };
  return { newState: s, counted: false };
}
function detectSquat(lm, s) {
  // Use both legs for more reliable detection
  const angleL = calcAngle(lm[23], lm[25], lm[27]);
  const angleR = calcAngle(lm[24], lm[26], lm[28]);
  const angle = (angleL + angleR) / 2;
  if ((s === 'ready' || s === 'up') && angle < 115) return { newState: 'down', counted: false };
  if (s === 'down' && angle > 155) return { newState: 'up', counted: true };
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
// TYPING CHALLENGE
// ============================================================
function startTypingChallenge(alarm) {
  showScreen('typing');
  renderMultiProgress('typing-multi-progress');

  const paragraph = TYPING_PARAGRAPHS[Math.floor(Math.random() * TYPING_PARAGRAPHS.length)];
  const sourceEl = $('#typing-source');
  const inputEl = $('#typing-input');
  const feedbackEl = $('#typing-feedback');

  // Render source text with character spans
  sourceEl.innerHTML = paragraph.split('').map((ch, i) =>
    `<span class="char-pending" data-idx="${i}">${ch === ' ' ? ' ' : ch.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`
  ).join('');

  inputEl.value = '';
  inputEl.focus();
  feedbackEl.classList.add('hidden');
  $('#typing-accuracy').textContent = 'Accuracy: 0%';
  $('#typing-progress').textContent = 'Progress: 0%';

  inputEl.oninput = () => {
    const typed = inputEl.value;
    const chars = sourceEl.querySelectorAll('span');
    let correct = 0;
    let total = typed.length;

    chars.forEach((span, i) => {
      if (i < typed.length) {
        if (typed[i] === paragraph[i]) {
          span.className = 'char-correct';
          correct++;
        } else {
          span.className = 'char-wrong';
        }
      } else {
        span.className = 'char-pending';
      }
    });

    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const progress = Math.round((typed.length / paragraph.length) * 100);
    $('#typing-accuracy').textContent = `Accuracy: ${accuracy}%`;
    $('#typing-progress').textContent = `Progress: ${Math.min(progress, 100)}%`;

    // Check completion: must type full length with 95%+ accuracy
    if (typed.length >= paragraph.length) {
      const finalAccuracy = Math.round((correct / paragraph.length) * 100);
      if (finalAccuracy >= 95) {
        feedbackEl.textContent = `TYPING COMPLETE — ${finalAccuracy}% ACCURACY`;
        feedbackEl.classList.remove('hidden');
        inputEl.disabled = true;
        setTimeout(() => { inputEl.disabled = false; onChallengeStepDone(); }, 1500);
      } else {
        feedbackEl.textContent = `ACCURACY TOO LOW (${finalAccuracy}%) — NEED 95%. TRY AGAIN.`;
        feedbackEl.style.color = 'var(--danger)';
        feedbackEl.style.background = 'rgba(var(--danger-rgb), 0.1)';
        feedbackEl.style.borderColor = 'rgba(var(--danger-rgb), 0.2)';
        feedbackEl.classList.remove('hidden');
      }
    }
  };
}

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
      else if (alarm.challengeType === 'typing') startTypingChallenge(alarm);
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
  updateBadges();
  updateDashboard();

  showScreen('success');

  // Show motivational quote
  const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  $('#motivational-quote').innerHTML = `<p class="quote-text">"${quote.text}"</p><p class="quote-author">— ${quote.author}</p>`;

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  let challengeDesc;
  if (alarm.challengeType === 'find-item') {
    const item = ITEMS.find((it) => it.id === alarm.item);
    challengeDesc = item ? `${item.icon} ${item.name}` : alarm.item;
  } else if (alarm.challengeType === 'exercise') {
    const ex = EXERCISES.find((e) => e.id === alarm.exercise);
    challengeDesc = ex ? ex.name : alarm.exercise;
  } else if (alarm.challengeType === 'typing') {
    challengeDesc = 'Typing Challenge';
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
// CAMERA — shared stream, requested once
// ============================================================
let _cameraStream = null;
let _cameraFacing = 'environment';

async function getCamera(facingMode) {
  // Reuse existing stream if same facing mode and tracks are live
  if (_cameraStream && _cameraFacing === facingMode) {
    const tracks = _cameraStream.getTracks();
    if (tracks.length > 0 && tracks[0].readyState === 'live') return _cameraStream;
  }
  // Stop old stream before switching
  if (_cameraStream) _cameraStream.getTracks().forEach(t => t.stop());
  try {
    _cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode, width: 640, height: 480 },
    });
  } catch (_) {
    _cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
  }
  _cameraFacing = facingMode;
  return _cameraStream;
}

async function attachCamera(videoEl, facingMode) {
  const stream = await getCamera(facingMode || 'environment');
  state.cameraStream = stream;
  videoEl.srcObject = stream;
  videoEl.setAttribute('playsinline', 'true');
  await videoEl.play();
  return stream;
}

function stopCamera() {
  // Don't kill the stream — just detach. Keeps permission alive.
  state.cameraStream = null;
}

function killCamera() {
  if (_cameraStream) {
    _cameraStream.getTracks().forEach((t) => t.stop());
    _cameraStream = null;
  }
  state.cameraStream = null;
}

async function flipCamera(videoEl) {
  _cameraFacing = _cameraFacing === 'environment' ? 'user' : 'environment';
  try {
    await attachCamera(videoEl, _cameraFacing);
  } catch (err) {
    _cameraFacing = _cameraFacing === 'environment' ? 'user' : 'environment';
  }
}

$('#find-flip-cam').addEventListener('click', () => flipCamera($('#find-video')));
$('#exercise-flip-cam').addEventListener('click', () => flipCamera($('#exercise-video')));

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
