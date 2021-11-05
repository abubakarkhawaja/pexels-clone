import {
  SET_USER,
  LOGOUT_USER,
  ADD_PHOTO,
  ADD_VIDEO,
  REMOVE_PHOTO,
  REMOVE_VIDEO,
} from '../actions/actionTypes';

const userState = {
  users: { byId: {} },
};

//   id: Number,
//   name: String,
//   username: String,
//   email: String,
//   photos: [],
//   videos: [],
//   isAuthenticated: false,
//   error: false,

export default function userReducer(state = userState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...{
          users: {
            byId: {
              ...state.users.byId,
              [action.user.id]: {
                ...action.user,
                photos: state.users.byId[action.user.id]
                  ? [...state.users.byId[action.user.id].photos]
                  : [],

                videos: state.users.byId[action.user.id]
                  ? [...state.users.byId[action.user.id].videos]
                  : [],
              },
            },
          },
        },
        isAuthenticated: true,
        error: false,
        authenticatedUser: action.user.id,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        error: false,
        authenticatedUser: undefined,
      };
    case ADD_PHOTO:
      return {
        ...state,
        ...{
          users: {
            byId: {
              ...state.users.byId,
              [action.userId]: {
                ...state.users.byId[action.userId],
                photos: [
                  ...state.users.byId[action.userId].photos,
                  action.photo,
                ],
              },
            },
          },
        },
      };
    case REMOVE_PHOTO:
      return {
        ...state,
        ...{
          users: {
            byId: {
              ...state.users.byId,
              [action.userId]: {
                ...state.users.byId[action.userId],
                photos: [
                  ...state.users.byId[action.userId].photos.filter((id) => {
                    if (id !== action.photo) return id;
                    return undefined;
                  }),
                ],
              },
            },
          },
        },
      };

    case ADD_VIDEO:
      return {
        ...state,
        ...{
          users: {
            byId: {
              [action.userId]: {
                ...state.users.byId[action.userId],
                videos: [
                  ...state.users.byId[action.userId].videos,
                  action.video,
                ],
              },
            },
          },
        },
      };
    case REMOVE_VIDEO:
      return {
        ...state,
        ...{
          users: {
            byId: {
              [action.userId]: {
                ...state.users.byId[action.userId],
                videos: [
                  ...state.users.byId[action.userId].videos.filter((id) => {
                    if (id !== action.video) return id;
                    return undefined;
                  }),
                ],
              },
            },
          },
        },
      };
    default:
      return state;
  }
}
