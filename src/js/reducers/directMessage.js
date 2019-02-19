import * as actions from '../actions/index';
import createNewState from '../utils/directMessageHelper';

const initialState = {
  currentPartnerUser: { name: '', socketId: '' },
  directMessage: {
    test: {
      name: 'testくん',
      messages: ['どうも！こちらでダイレクトメッセージを送信できます！'],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.START_DIRECT_MESSAGE:
      return createNewState(action.payload, state);
    case actions.SEND_DIRECT_MESSAGE:
      return {
        ...state,
      };
    case actions.RECEIVE_DIRECT_MESSAGE:
      return {
        ...state,
      };
    case actions.ADD_DIRECT_MESSAGE:
      const { messageObj, partnerSocketId } = action.payload;
      const { name, messages } = state.directMessage[partnerSocketId];
      return {
        ...state,
        directMessage: {
          ...state.directMessage,
          [partnerSocketId]: {
            name,
            messages: messages.concat(messageObj),
          },
        },
      };
    default:
      return state;
  }
};
