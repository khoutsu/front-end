const env = require("../components/env.js");
const apiConfig = require("../components/ApiurlToken.js")[env];
export async function getAllMovies() {
  try {
    const response = await fetch(`${apiConfig.API_URL}/api/movie/all`, {
      headers: {
        Authorization: `Bearer ${apiConfig.bearer_token}`,
      },
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createMovie(data) {
  try {
    const response = await fetch(`${apiConfig.API_URL}/api/movie/insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiConfig.bearer_token}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    return { error: "Failed to create movie" };
  }
}

export async function searchMovie(search_text) {
  try {
    const response = await fetch(
      `${apiConfig.API_URL}/api/movie/search?search_text=${search_text}`,
      {
        headers: {
          Authorization: `Bearer ${apiConfig.bearer_token}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
