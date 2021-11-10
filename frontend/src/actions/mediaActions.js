import {
  GET_BANNER,
  GET_MEDIA,
  GET_PROFILE_MEDIAS,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
} from './actionTypes';

import {
  getBanner,
  getMedia,
  getProfileMedias,
  getPhotos,
  getVideos,
  fetchBackendUrl,
} from '../services/requests';

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
      dispatch({ type: GET_PROFILE_MEDIAS, medias: { ...medias } });
    });
  };
}

export function getProfileMediasRecordAction(token) {
  return function (dispatch) {
    const photoUrl = process.env.REACT_APP_PHOTOS_URL;
    const videoUrl = process.env.REACT_APP_VIDEOS_URL;

    fetchBackendUrl(photoUrl, token).then((medias) => {
      const photos = [];
      for (const media of medias) {
        photos.push(media.photoId);
      }

      dispatch(getProfileMediasAction(photos, 'photos'));
    });

    fetchBackendUrl(videoUrl, token).then((medias) => {
      const videos = [];
      for (const media of medias) {
        videos.push(media.videoId);
      }

      dispatch(getProfileMediasAction(videos, 'videos'));
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
