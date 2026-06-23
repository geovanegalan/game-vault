export async function addGameToLibrary(game) {
  const loggedUser = localStorage.getItem('loggedUser');

  if (!loggedUser) {
    throw new Error('Usuário não está logado.');
  }

  const parsedUser = JSON.parse(loggedUser);
  const userId = parsedUser.id;

  const userRes = await fetch(`http://localhost:3000/users/${userId}`);

  if (!userRes.ok) {
    throw new Error('Erro ao buscar usuário no servidor.');
  }

  const user = await userRes.json();

  const exists = (user.library || []).some((g) => g.id === game.id);
  if (exists) {
    Swal.fire('Este jogo já está na sua biblioteca.');
    return;
  }

  const newGame = {
    id: game.id,
    title: game.name,
    image: game.background_image,
    studio:
      game.developers?.[0]?.name || game.publishers?.[0]?.name || 'Unknown',
    status: 'backlog',
  };

  user.library.push(newGame);

  const updateRes = await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (!updateRes.ok) {
    throw new Error('Erro ao atualizar biblioteca no servidor.');
  }

  return newGame;
}
