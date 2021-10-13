import {
  GET_BANNER,
  GET_MEDIA,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
} from '../types';
import { getBanner, getMedia, getPhotos, getVideos } from '../../utility';

export function getBannerAction(url) {
  return function (dispatch) {
    getBanner(url).then((banner) => {
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
    if (!createNew) {
      dispatch({ type: EMPTY_VIDEOS });
    }
    getVideos(url).then((videos) => {
      dispatch({ type: GET_VIDEOS, videos });
    });
  };
}
