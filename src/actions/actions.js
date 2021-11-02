import {
  GET_BANNER,
  GET_MEDIA,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
  SET_USER,
} from './actionTypes';
import {
  getBanner,
  getMedia,
  getPhotos,
  getVideos,
  getUsers,
} from '../services/requests';

export function loginUserAction(email, password) {
  return function (dispatch) {
    getUsers().then((users) => {
      for (const user of users) {
        if (user.email === email) {
          dispatch({
            type: SET_USER,
            user: { ...user, isAuthenticated: true, error: false },
          });
          return;
        }
      }
      dispatch({
        type: SET_USER,
        user: { isAuthenticated: false, error: true },
      });
    });
  };
}

export function clearUserAction() {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      user: { isAuthenticated: false, error: false },
    });
  };
}

export function getBannerAction() {
  return function (dispatch) {
    getBanner().then((banner) => {
      dispatch({ type: GET_BANNER, banner });
    });
  };
}

export function getMediaAction(url) {
  return function (dispatch) {
    getMedia(url).then((media) => {
      dispatch({ type: GET_MEDIA, media });
    });
  };
}

export function getPhotosAction(url, createNew) {
  return function (dispatch) {
    if (createNew) {
      dispatch({ type: EMPTY_PHOTOS });
    }
    getPhotos(url).then((photos) => {
      dispatch({ type: GET_PHOTOS, photos });
    });
  };
}

export function getVideosAction(url, createNew) {
  return function (dispatch) {
    if (createNew) {
      dispatch({ type: EMPTY_VIDEOS });
    }
    getVideos(url).then((videos) => {
      dispatch({ type: GET_VIDEOS, videos });
    });
  };
}
