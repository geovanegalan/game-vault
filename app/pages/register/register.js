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

      let list = JSON.parse(localStorage.getItem('userList')) || [];

      list.push(user);

      localStorage.setItem('userList', JSON.stringify(list));

      form.classList.add('was-validated');
    });
  });
})();
