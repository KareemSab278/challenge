import { makeApiRequest } from "./helpers";

export {
  getAllAnime, createAnime, deleteAnime, loginUser,
  getAnimeById, updateAnime, registerUser,
  getReviewsForAnime, createReview, deleteReview,
}


const getAllAnime = async () => {
  return makeApiRequest(`/anime`);
};

const getAnimeById = async (id) => {
  return makeApiRequest(`/anime/${id}`);
};

const createAnime = async (animeData) => {
  return makeApiRequest(`/anime`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animeData),
  });
};

const updateAnime = async (id, updates) => {
  return makeApiRequest(`/anime/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });
};

const deleteAnime = async (id) => {
  await makeApiRequest(`/anime/${id}`, {
    method: 'DELETE',
  });
  return true;
};

const registerUser = async (userData) => {
  return makeApiRequest(`/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

const loginUser = async (credentials) => {
  return makeApiRequest(`/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
};

const createReview = async (reviewData) => {
  return makeApiRequest(`/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
  });
};

const getReviewsForAnime = async (animeId) => {
  return makeApiRequest(`/reviews/anime/${animeId}`);
};

const deleteReview = async (reviewId) => {
  await makeApiRequest(`/reviews/${reviewId}`, {
    method: 'DELETE',
  });
  return true;
}