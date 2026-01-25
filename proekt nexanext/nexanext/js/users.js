const grid = document.getElementById('usersGrid');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const loadMoreBtn = document.getElementById('loadMore');
const themeToggle = document.getElementById('themeToggle');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

let users = [];
let displayedCount = 0;
const batchSize = 50;

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Load theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

// Auth
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (currentUser) {
  loginBtn.classList.add('hidden');
  logoutBtn.classList.remove('hidden');
}

loginBtn.addEventListener('click', () => window.location.href = 'login.html');
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  window.location.reload();
});

// Skeleton loaders
function createSkeletonCard() {
  const card = document.createElement('div');
  card.className = 'card skeleton-card';
  card.innerHTML = `
    <div class="skeleton" style="height: 150px; margin-bottom: 16px;"></div>
    <div class="skeleton" style="height: 20px; margin-bottom: 8px;"></div>
    <div class="skeleton" style="height: 16px; margin-bottom: 8px;"></div>
    <div class="skeleton" style="height: 14px;"></div>
  `;
  return card;
}

function addSkeletonCards(count) {
  for (let i = 0; i < count; i++) {
    grid.appendChild(createSkeletonCard());
  }
}

function clearSkeletons() {
  const skeletons = grid.querySelectorAll('.skeleton-card');
  skeletons.forEach(s => s.remove());
}

function displayUsers(newUsers) {
  clearSkeletons();
  newUsers.forEach(u => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${u.image}" alt="${u.firstname} ${u.lastname}" />
      <h3>${u.firstname} ${u.lastname}</h3>
      <p>${u.email}</p>
      <small>${u.job?.title || 'Unknown'}</small>
    `;
    card.onclick = () => location.href = `profile.html?id=${u.id}`;
    grid.appendChild(card);
  });
  displayedCount += newUsers.length;
  if (displayedCount >= users.length) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

getAllUsers()
  .then(allUsers => {
    users = allUsers;
    loading.classList.add('hidden');
    addSkeletonCards(Math.min(batchSize, users.length));
    setTimeout(() => displayUsers(users.slice(0, batchSize)), 1000); // Simulate loading
  })
  .catch(() => {
    loading.classList.add('hidden');
    error.classList.remove('hidden');
  });

loadMoreBtn.addEventListener('click', () => {
  const nextBatch = users.slice(displayedCount, displayedCount + batchSize);
  addSkeletonCards(nextBatch.length);
  setTimeout(() => displayUsers(nextBatch), 1000);
});