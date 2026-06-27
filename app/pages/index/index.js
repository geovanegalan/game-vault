const userBtn = document.getElementById('user-btn');
const logoutBtn = document.getElementById('logout-btn');
const loggedUser = localStorage.getItem('loggedUser');

if (!loggedUser) {
  userBtn.removeAttribute('data-bs-toggle');
  userBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../login/login.html';
  });
} else {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    window.location.href = '../login/login.html';
  });
}
