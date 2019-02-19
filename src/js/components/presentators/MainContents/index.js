import React from 'react';
import { pure, compose } from 'recompose';
import ChatRoom from './ChatRoom';
import Pending from '../shared/Pending';
import NotFound from '../shared/NotFound';

const enhancer = compose(pure);

const renderComponent = ({
  sendMessage,
  app,
  chatRoom,
  removeRoom,
  showModal,
  startDirectMessage,
}) => {
  const { pending, notFound } = chatRoom;
  if (pending) {
    return <Pending />;
  }
  if (notFound) {
    return <NotFound />;
  }
  return (
    <ChatRoom
      {...{
        sendMessage,
        app,
        chatRoom,
        removeRoom,
        showModal,
        startDirectMessage,
      }}
    />
  );
};

export default enhancer(props => (
  <React.Fragment>{renderComponent(props)}</React.Fragment>
));
