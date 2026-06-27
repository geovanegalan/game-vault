const API_KEY = '47ab4c38683f43268a80bd5829404ab6';

export async function searchGames(query) {
  const res = await fetch(
    `https://api.rawg.io/api/games?search=${query}&key=${API_KEY}`
  );

  const data = await res.json();
  return data.results;
}
