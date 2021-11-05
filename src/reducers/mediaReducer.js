import {
  GET_BANNER,
  GET_MEDIA,
  GET_PROFILE_MEDIAS,
  GET_PHOTOS,
  GET_VIDEOS,
  EMPTY_PHOTOS,
  EMPTY_VIDEOS,
} from '../actions/actionTypes';

const mediaState = {
  banner: {},
  media: { src: { landscape: '' }, user: { name: '' } },
  profileMedias: { photos: [], videos: [] },
  photos: [],
  videos: [],
};

export default function mediaReducer(state = mediaState, action) {
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

    case GET_PROFILE_MEDIAS:
      return {
        ...state,
        profileMedias: { ...state.profileMedias, ...action.medias },
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
