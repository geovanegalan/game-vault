import { loginService } from './login.service.js';

(() => {
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      const gamerTag = document.getElementById('user-tag').value;
      const password = document.getElementById('password').value;

      try {
        const user = await loginService.login(gamerTag, password);

        localStorage.setItem(
          'loggedUser',
          JSON.stringify({
            id: user.id,
            tag: user.gamerTag,
            email: user.email,
          })
        );

        window.location.href = '/index.html';
      } catch (error) {
        alert(error.message);
      }

      form.classList.add('was-validated');
    });
  });
})();
