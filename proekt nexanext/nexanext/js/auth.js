// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
});

// Load theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('themeToggle').textContent = '☀️';
}

// Auth functions
function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials');
  }
}

function register(firstname, lastname, email, password, job) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.find(u => u.email === email)) {
    alert('Email already exists');
    return;
  }
  const newUser = {
    id: Date.now().toString(),
    firstname,
    lastname,
    email,
    password,
    image: 'https://via.placeholder.com/150', // Placeholder image
    job: { title: job },
    address: { city: 'Unknown', country: 'Unknown' },
    birthday: '1990-01-01'
  };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  window.location.href = 'index.html';
}

// Event listeners
if (document.getElementById('loginSubmit')) {
  document.getElementById('loginSubmit').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (document.getElementById('registerSubmit')) {
  document.getElementById('registerSubmit').addEventListener('click', () => {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const job = document.getElementById('job').value;
    register(firstname, lastname, email, password, job);
  });
}