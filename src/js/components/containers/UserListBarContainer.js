import { connect } from 'react-redux';
import { compose, pure } from 'recompose';
import { withRouter } from 'react-router-dom';
import UserListBar from '../presentators/MainContents/ChatRoom/UserListBar';
import { startDirectMessage, showModal } from '../../actions';

/* eslint-disable */
const enhancer = compose(
  connect(
    state => {
      const directMessageList = state.directMessage.directMessage;
      let users = [];
      for (const socketId in directMessageList) {
        const userObj = {};
        userObj.socketId = socketId;
        userObj.name = directMessageList[socketId].name;
        users.push(userObj);
      }
      return {
        ownName: state.app.username,
        roomUsers: state.chatRoom.users,
        directMessageUsers: users,
      }
    },
    {
      startDirectMessage,
      showModal,
    },
  ),
  pure,
);

export default enhancer(UserListBar);
