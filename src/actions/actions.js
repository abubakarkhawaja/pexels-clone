import {
  GET_BANNER,
  GET_MEDIA,
  GET_PROFILE_MEDIAS,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
  SET_USER,
  LOGOUT_USER,
  ADD_PHOTO,
  REMOVE_PHOTO,
  ADD_VIDEO,
  REMOVE_VIDEO,
} from './actionTypes';
import {
  getBanner,
  getMedia,
  getProfileMedias,
  getPhotos,
  getVideos,
  getUsers,
} from '../services/requests';

export function likePhoto(userId, photoId) {
  return function (dispatch) {
    dispatch({ type: ADD_PHOTO, userId: userId, photo: photoId });
  };
}

export function unlikePhoto(userId, photoId) {
  return function (dispatch) {
    dispatch({ type: REMOVE_PHOTO, userId: userId, photo: photoId });
  };
}

export function likeVideo(userId, videoId) {
  return function (dispatch) {
    dispatch({ type: ADD_VIDEO, userId: userId, video: videoId });
  };
}

export function unlikeVideo(userId, videoId) {
  return function (dispatch) {
    dispatch({ type: REMOVE_VIDEO, userId: userId, video: videoId });
  };
}

export function loginUserAction(email, password) {
  return function (dispatch) {
    getUsers().then((users) => {
      for (const user of users) {
        if (user.email === email) {
          dispatch({
            type: SET_USER,
            user: { ...user },
          });
          return;
        }
      }
      dispatch({
        type: LOGOUT_USER,
      });
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

export function getProfileMediasAction(mediaIds, contentType) {
  return function (dispatch) {
    const urls = [];
    const baseUrl =
      contentType === 'photos'
        ? process.env.REACT_APP_BASE_IMAGE_URL
        : process.env.REACT_APP_BASE_VIDEO_URL;

    for (var id of mediaIds) {
      urls.push(baseUrl + id);
    }

    getProfileMedias(urls, contentType).then((medias) => {
      dispatch({ type: GET_PROFILE_MEDIAS, medias });
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
