import {
  GET_BANNER,
  GET_MEDIA,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
} from '../types';

const initialState = {
  banner: {},
  media: { src: { landscape: '' }, user: { name: '' } },
  photos: [],
  videos: [],
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BANNER:
      return {
        ...state,
        banner: action.banner,
      };
    case GET_MEDIA:
      return {
        ...state,
        media: action.media,
      };
    case GET_PHOTOS:
      if (state.photos.length !== 0) {
        return {
          ...state,
          photos: [...state.photos, ...action.photos],
        };
      }
      return {
        ...state,
        photos: action.photos,
      };
    case GET_VIDEOS:
      if (state.videos.length !== 0) {
        return {
          ...state,
          videos: [...state.videos, ...action.videos],
        };
      }
      return {
        ...state,
        videos: action.videos,
      };
    case EMPTY_PHOTOS:
      return {
        ...state,
        photos: [],
      };
    case EMPTY_VIDEOS:
      return {
        ...state,
        photos: [],
      };
    default:
      return state;
  }
}
