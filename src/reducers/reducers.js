import {
  GET_BANNER,
  GET_MEDIA,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
  SET_USER,
} from '../actions/actionTypes';

const mediaState = {
  banner: {},
  media: { src: { landscape: '' }, user: { name: '' } },
  photos: [],
  videos: [],
};

const userState = {
  id: Number,
  name: String,
  username: String,
  email: String,
  isAuthenticated: false,
  error: false,
};

export function userReducer(state = userState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
}

export function mediaReducer(state = mediaState, action) {
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
        videos: [],
      };
    default:
      return state;
  }
}
