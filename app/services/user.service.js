export async function getUsuarioLogadoCompleto() {
  const loggedUser = localStorage.getItem('loggedUser');

  if (!loggedUser) return null;

  const parsedUser = JSON.parse(loggedUser);

  const userId = parsedUser.id;

  if (!userId) return null;

  try {
    const res = await fetch(`http://localhost:3000/users/${userId}`);

    if (!res.ok) return null;

    return await res.json();
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    return null;
  }
}
