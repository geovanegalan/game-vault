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
