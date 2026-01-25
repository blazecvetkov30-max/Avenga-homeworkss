const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const themeToggle = document.getElementById('themeToggle');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

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

fetchData(API.images).then(images => {
  images.forEach(img => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${img.url}" alt="Gallery image" />`;
    card.onclick = () => {
      modalImg.src = img.url;
      modal.classList.remove('hidden');
    };
    gallery.appendChild(card);
  });
});

modal.onclick = () => modal.classList.add('hidden');