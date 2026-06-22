const API_KEY = '';

export async function searchGames(query) {
  const res = await fetch(
    `https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`
  );

  const data = await res.json();
  return data.results;
}
