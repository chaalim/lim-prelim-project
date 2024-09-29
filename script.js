const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signupUsernameInput = document.getElementById('signupUsername');
const signupPasswordInput = document.getElementById('signupPassword');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');
const logoutBtn = document.getElementById('logoutBtn');

function showSignupForm() {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
}

function showLoginForm() {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
}

signupLink.addEventListener('click', showSignupForm);
loginLink.addEventListener('click', showLoginForm);

function handleLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('Login successful!');
    window.location.href = 'home.html';
  } else {
    alert('Invalid username or password.');
  }
}

function handleSignup() {
  const username = signupUsernameInput.value;
  const password = signupPasswordInput.value;
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(u => u.username === username)) {
    alert('Username already exists!');
    return;
  }

  const newUser = { username, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Signup successful!');
  showLoginForm();
}

function handleLogout() {
  localStorage.clear();
  window.location.href = 'index.html';
}

loginBtn.addEventListener('click', handleLogin);
signupBtn.addEventListener('click', handleSignup);
logoutBtn.addEventListener('click', handleLogout);

window.onload = function() {
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', handleLogout);
};
