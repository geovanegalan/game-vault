import { userService } from './register.service.js';

(() => {
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();

        form.classList.add('was-validated');
        return;
      }

      e.preventDefault();

      const user = {
        gamerTag: document.getElementById('gamer-tag').value,
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };

      sentToServer(user);

      form.classList.add('was-validated');
    });
  });
})();

async function sentToServer(user) {
  try {
    await userService.registerUser(user);

    // só chega aqui se o JSON Server salvou com sucesso
    let list = JSON.parse(localStorage.getItem('userList')) || [];
    list.push(user);
    localStorage.setItem('userList', JSON.stringify(list));

    window.location.href = '/index.html';
  } catch (erro) {
    console.error(erro);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Something wrong! ${erro}`,
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }
}
