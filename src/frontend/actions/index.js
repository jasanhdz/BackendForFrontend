import axios from 'axios';
const dotenv = require('dotenv');

dotenv.config();

export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const setIdMovie = (payload) => {
  return (dispatch) => {
    axios({
      url: `/api/movies/${payload._id}`,
      method: 'post',
      data: {}
    })
      .then(() => {
        dispatch(setFavorite(payload));
        console.log('OK');
      })
      .catch((error) => dispatch(setError(error)));
  }
}

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});

export const setError = (payload) => ({
  type: 'SET_ERROR',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const registerUser = (payload, redirectURL) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      // .then(() => {
      //   setTimeout(() => {
      //     window.location.href = redirectURL;
      //   }, 10000);
      // })
      .catch((error) => dispatch(setError(error)));
  }   
}

export const loginUser = ({ email, password }, redirectURL) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in', 
      method: 'post',
      auth: {
        username: email,
        password,
      }
    })
      .then(({ data }) => {
        console.log(data);
        document.cookie = `email=${data.user.email}`;
        document.cookie = `name=${data.user.name}`;
        document.cookie = `id=${data.user.id}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirectURL;
      })
      .catch((error) => dispatch(setError(error)));
  }
}

