import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import DirectMessageModal from '../presentators/Modal/DirectMessageModal';
import { sendDirectMessage, hideModal } from '../../actions';

const enhancer = compose(
  connect(
    state => {
      const { name, socketId } = state.directMessage.currentPartnerUser;
      return {
        messageList: state.directMessage.directMessage[socketId].messages,
        partnerName: name,
      };
    },
    {
      sendDirectMessage,
      hideModal,
    },
  ),
  pure,
);

export default enhancer(DirectMessageModal);
