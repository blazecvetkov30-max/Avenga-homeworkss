const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const container = document.getElementById('profile');
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

getAllUsers().then(users => {
  const u = users.find(user => user.id == id);
  if (!u) {
    container.innerHTML = '<p>User not found</p>';
    return;
  }

  // Get friends
  const friends = users.filter(user => user.id != id).sort(() => 0.5 - Math.random()).slice(0, 3);

  // Get posts
  fetchData(API.texts).then(texts => {
    const posts = texts.map((text, i) => ({
      content: text.content,
      image: i % 2 === 0 ? null : 'https://via.placeholder.com/400x200' // Alternate images
    }));

    container.innerHTML = `
      <div class="card">
        <img src="${u.image}" alt="${u.firstname} ${u.lastname}" class="profile-img" />
        <h2>${u.firstname} ${u.lastname}</h2>
        <p><strong>Email:</strong> ${u.email}</p>
        <p><strong>Job:</strong> ${u.job?.title || 'Unknown'}</p>
        <p><strong>Date of Birth:</strong> ${u.birthday || 'Unknown'}</p>
        <p><strong>Location:</strong> ${u.address?.city || 'Unknown'}, ${u.address?.country || 'Unknown'}</p>
        <h3>Friends</h3>
        <ul class="friends-list">
          ${friends.map(f => `<li><img src="${f.image}" alt="${f.firstname} ${f.lastname}" /> ${f.firstname} ${f.lastname}</li>`).join('')}
        </ul>
        <button onclick="location.href='gallery.html?id=${id}'">View Photos</button>
      </div>
      <div class="posts">
        <h3>Posts</h3>
        ${posts.map(post => `
          <div class="post">
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post image" />` : ''}
          </div>
        `).join('')}
      </div>
    `;
  });
});