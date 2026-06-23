const userBtn = document.getElementById('user-btn');
const logoutBtn = document.getElementById('logout-btn');
const loggedUser = localStorage.getItem('loggedUser');

if (!loggedUser) {
  // sem usuário logado remove o toggle do Bootstrap
  // e redireciona ao clicar
  userBtn.removeAttribute('data-bs-toggle');
  userBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '../login/login.html';
  });
} else {
  // com usuário logado Bootstrap cuida do dropdown
  // só precisa do logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    window.location.href = '../login/login.html';
  });
}
