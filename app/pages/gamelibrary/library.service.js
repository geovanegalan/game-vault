export async function addGameToLibrary(game) {
  const loggedUser = localStorage.getItem('loggedUser');

  const userId = loggedUser.id;

  const userRes = await fetch(`http://localhost:3000/users/${userId}`);
  const user = await userRes.json();

  const exists = (user.library || []).some((g) => g.id === game.id);
  if (exists) return;

  const newGame = {
    id: game.id,
    title: game.name,
    image: game.background_image,
    studio: game.developers?.[0]?.name || 'Unknown',
    status: 'backlog',
  };

  user.library.push(newGame);

  await fetch(`http://localhost:3000/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
}
