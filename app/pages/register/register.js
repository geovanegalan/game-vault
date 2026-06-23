import { userService } from '../../services/register.service.js';

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
        library: [],
      };

      sentToServer(user);

      form.classList.add('was-validated');
    });
  });
})();

async function sentToServer(user) {
  try {
    await userService.registerUser(user);

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

$('#password').on('input', function () {
  const senha = $(this).val();

  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /\d/.test(senha);
  const temEspecial = /[^A-Za-z\d]/.test(senha);

  let requisitos = 0;

  if (temMaiuscula) requisitos++;
  if (temMinuscula) requisitos++;
  if (temNumero) requisitos++;
  if (temEspecial) requisitos++;

  const strength = $('.password-strength');

  strength.removeClass('fraca media forte');

  if (senha.length < 8) {
    strength.text('Senha fraca');
    strength.addClass('fraca');
  } else if (requisitos < 3) {
    strength.text('Senha média');
    strength.addClass('media');
  } else {
    strength.text('Senha forte');
    strength.addClass('forte');
  }
});
