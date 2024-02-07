const bearerToken = "1234567890";
export async function getAllMovies() {
  try {
    const response = await fetch("https://api.se-rmutl.net/api/movie/all", {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function createMovie(data) {
  try {
    const response = await fetch("https://api.se-rmutl.net/api/movie/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${bearerToken}`,
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
      `https://api.se-rmutl.net/api/movie/search?search_text=${search_text}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}
