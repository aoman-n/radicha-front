const initialState = {
  loginErrorMessage: '',
  roomList: [],
  modals: {
    login: false,
    create: false,
    eject: false,
    direct: false,
  },
  isRoomBar: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        loginErrorMessage: action.payload,
      };
    case 'SET_ROOM_LIST':
      return {
        ...state,
        roomList: action.payload,
      };
    case 'ADD_ROOM':
      return {
        ...state,
        roomList: state.roomList.concat(action.payload),
      };
    case 'DELETE_ROOM_FROM_LIST':
      return {
        ...state,
        roomList: state.roomList.filter(room => room !== action.payload),
      };
    case 'TOGLLE_ROOMBAR':
      return { ...state, isRoomBar: !state.isRoomBar };
    case 'SHOW_MODAL':
      return {
        ...state,
        modals: { [action.payload]: true },
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        modals: { [action.payload]: false },
        loginErrorMessage: '',
      };
    default:
      return state;
  }
};
