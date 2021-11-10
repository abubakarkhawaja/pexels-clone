import {
  ADD_PHOTO,
  ADD_VIDEO,
  AUTH_FAIL,
  LOGOUT_USER,
  REMOVE_PHOTO,
  REMOVE_VIDEO,
  SET_USER,
} from './actionTypes';

import {
  addPhoto,
  addVideo,
  createUser,
  getToken,
  getUser,
  removePhoto,
  removeVideo,
} from '../services/requests';

import { getProfileMediasRecordAction } from './mediaActions';

export function loginUserAction(email, password) {
  return function (dispatch) {
    return getToken(email, password)
      .then((token) => {
        if (token === undefined) throw Error('Authentication Failed');
        dispatch(getUserAction(token));
        return token;
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(authFailAction());
        return false;
      });
  };
}

export function signupUserAction(signupInfo) {
  return function (dispatch) {
    createUser(signupInfo)
      .then((user) => {
        if (user === undefined) throw Error('Account Creation Failed');
        dispatch(getUserAction(user.token));
      })
      .catch((err) => {
        console.error(err.message);
        dispatch(authFailAction());
      });
  };
}

export function getUserAction(token) {
  return function (dispatch) {
    getUser(token).then((user) => {
      dispatch({
        type: SET_USER,
        user: { ...user, token },
      });

      dispatch(getProfileMediasRecordAction(token, user.id));
    });
  };
}
export function clearUserAction() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };
}

export function authFailAction() {
  return (dispatch) => {
    dispatch({ type: AUTH_FAIL });
  };
}

export function likePhoto(user, photoId) {
  return function (dispatch) {
    return addPhoto(user.token, photoId)
      .then((success) => {
        if (!success) throw Error('Photo Like failed.');
        dispatch({ type: ADD_PHOTO, userId: user.id, photo: photoId });
        alert('Photo liked');
        return true;
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      });
  };
}

export function unlikePhoto(user, photoId) {
  return function (dispatch) {
    return removePhoto(user.token, photoId)
      .then((success) => {
        if (!success) throw Error('Photo Unlike failed.');
        dispatch({ type: REMOVE_PHOTO, userId: user.id, photo: photoId });
        alert('Photo unliked');
        return true;
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      });
  };
}

export function likeVideo(user, videoId) {
  return function (dispatch) {
    addVideo(user.token, videoId)
      .then((success) => {
        if (!success) throw Error('Video Like failed.');
        dispatch({ type: ADD_VIDEO, userId: user.id, video: videoId });
        alert('Video liked');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
}

export function unlikeVideo(user, videoId) {
  return function (dispatch) {
    removeVideo(user.token, videoId)
      .then((success) => {
        if (!success) throw Error('Video Unlike failed.');
        dispatch({ type: REMOVE_VIDEO, userId: user.id, video: videoId });
        alert('Video unliked');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
}
