import { getUsuarioLogadoCompleto } from '../../services/user.service.js';

async function renderLibrary() {
  const user = await getUsuarioLogadoCompleto();

  if (!user) {
    window.location.href = '/app/pages/login/login.html';
    return;
  }

  const container = document.getElementById('library-container');

  container.innerHTML = `
    <div class="col">
      <button class="add-artifact-btn h-100"
        data-bs-target="#addArtifactModal"
        data-bs-toggle="modal">
        <span class="material-symbols-outlined icon">add_box</span>
        <span class="text">Add Game</span>
      </button>
    </div>
  `;

  user.library.forEach((game) => {
    const col = document.createElement('div');
    col.classList.add('col');

    col.innerHTML = `
      <div class="game-card">
        <div class="card-img-container">
          <img src="${game.image}" alt="${game.title}" sizes="(max-width: 768px) 50vw, 25vw" />
        <span class="status-badge badge-${game.status}">
          ${game.status}
        </span>
        <div class="play-overlay"></div>
        </div>
        <h3 class="game-title">${game.title}</h3>
        <p class="game-studio">${game.studio}</p>
      </div>
`;

    container.appendChild(col);
  });
}

renderLibrary();

//procurar os jogos
import { searchGames } from '../../services/games.service.js';

const input = document.getElementById('gameSearchInput');
const container = document.getElementById('searchResults');

input.addEventListener('keydown', async (e) => {
  if (e.key !== 'Enter') return;

  const query = input.value;
  const games = await searchGames(query);

  container.innerHTML = '';

  games.forEach((game) => {
    const col = document.createElement('div');

    col.classList.add('col');

    col.innerHTML = `
      <div class="mini-game-card d-flex flex-column h-100">
        <img class="mini-game-img w-100" src="${game.background_image}" />

        <h6 class="text-white mb-0 mt-1 text-truncate">
          ${game.name}
        </h6>

        <span class="text-muted text-uppercase">
          ${
            game.developers?.[0]?.name ||
            game.publishers?.[0]?.name ||
            'Unknown'
          }
        </span>

        <button class="btn btn-obsidian-add mt-auto add-game"
          data-id="${game.id}">
          Add
        </button>
      </div>
    `;

    container.appendChild(col);
  });
});

//adiciona o game a biblioteca
import { addGameToLibrary } from '../../services/library.service.js';

document.addEventListener('click', async (e) => {
  if (!e.target.classList.contains('add-game')) return;

  const gameId = e.target.dataset.id;

  const res = await fetch(
    `https://api.rawg.io/api/games/${gameId}?key=47ab4c38683f43268a80bd5829404ab6`
  );

  const game = await res.json();

  await addGameToLibrary(game);
  await renderLibrary();
});
