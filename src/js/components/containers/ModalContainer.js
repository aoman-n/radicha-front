import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import Modal from '../presentators/Modal';
import { loginUser, createRoom, hideModal } from '../../actions';

const enhancer = compose(
  connect(
    state => ({
      modals: state.viewContents.modals,
      username: state.app.username,
      loginErrorMessage: state.viewContents.loginErrorMessage,
    }),
    {
      loginUser,
      createRoom,
      hideModal,
    },
  ),
  pure,
);

export default enhancer(Modal);
