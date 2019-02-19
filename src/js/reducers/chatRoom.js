const initialState = {
  roomname: null,
  master: {},
  users: [],
  messages: [],
  joined: false,
  pending: false,
  notFound: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NOT_FOUND_ROOM':
      return {
        ...state,
        pending: false,
        notFound: true,
      };
    case 'JOIN_ROOM':
      return {
        ...state,
        roomname: action.payload,
        joined: true,
        pending: true,
        notFound: false,
      };
    case 'LEAVE_ROOM':
      return {
        ...state,
        roomname: null,
        joined: false,
      };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      };
    case 'INITIALIZE_ROOM_DATA':
      return {
        ...state,
        master: action.payload.users[0],
        users: action.payload.users,
        messages: action.payload.messages,
        pending: false,
      };
    case 'ADD_ROOM_USER':
      return {
        ...state,
        users: state.users.concat({
          id: action.payload.socket_id,
          name: action.payload.name,
        }),
      };
    case 'REMOVE_ROOM_USER':
      return {
        ...state,
        users: state.users.filter(u => u.socket_id !== action.payload),
      };
    case 'SWITCH_ROOM_MASTER':
      return {
        ...state,
        master: state.users[0],
      };
    case 'RESET_CHATROOM_STATE':
      return initialState;
    default:
      return state;
  }
};
