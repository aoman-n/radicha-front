import { connect } from 'react-redux';
import { pure, compose } from 'recompose';
import {
  toggleRoombar,
  logoutUser,
  joinRoom,
  showModal,
  hideModal,
} from '../../actions';
import Home from '../presentators/Home';

const enhancer = compose(
  connect(
    state => ({
      viewContents: state.viewContents,
      app: state.app,
    }),
    {
      toggleRoombar,
      logoutUser,
      joinRoom,
      showModal,
      hideModal,
    },
  ),
  pure,
);

export default enhancer(Home);
