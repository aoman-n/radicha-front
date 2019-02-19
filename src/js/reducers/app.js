const initialState = {
  username: null,
  socket: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case 'LOGIN_USER':
    //   return {
    //     ...state,
    //     username: action.payload,
    //   };
    case 'SET_USER_NAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        username: null,
      };
    case 'SET_SOCKET':
      return {
        ...state,
        socket: action.payload,
      };
    case 'DELETE_SOCKET':
      return {
        ...state,
        socket: null,
      };
    case 'RESET_APP_STATE':
      return initialState;
    default:
      return state;
  }
};
