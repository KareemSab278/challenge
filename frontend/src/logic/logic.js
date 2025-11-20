const API_BASE_URL = 'http://localhost:5000/api';

export {
  getAllAnime,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
  registerUser,
  loginUser,
  createReview,
  getReviewsForAnime,
}

const getAllAnime = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime`);
    if (!response.ok) throw new Error('Failed to fetch anime');
    return await response.json();
  } catch (error) {
    console.error('Error fetching anime:', error);
    throw error;
  }
};

const getAnimeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime/${id}`);
    if (!response.ok) throw new Error('Failed to fetch anime');
    return await response.json();
  } catch (error) {
    console.error('Error fetching anime by ID:', error);
    throw error;
  }
};

const createAnime = async (animeData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(animeData),
    });
    if (!response.ok) throw new Error('Failed to create anime');
    return await response.json();
  } catch (error) {
    console.error('Error creating anime:', error);
    throw error;
  }
};

const updateAnime = async (id, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update anime');
    return await response.json();
  } catch (error) {
    console.error('Error updating anime:', error);
    throw error;
  }
};

const deleteAnime = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete anime');
    return true;
  } catch (error) {
    console.error('Error deleting anime:', error);
    throw error;
  }
};

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to register user');
    return await response.json();
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Failed to login');
    return await response.json();
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

const createReview = async (reviewData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    if (!response.ok) throw new Error('Failed to create review');
    return await response.json();
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
};

const getReviewsForAnime = async (animeId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/anime/${animeId}`);
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
