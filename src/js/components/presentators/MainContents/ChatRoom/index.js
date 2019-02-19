import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import MessageList from './MessageList';
import Form from './Form';
import UserListBarContainer from '../../../containers/UserListBarContainer';

const ChatRoom = ({
  sendMessage,
  chatRoom,
  app,
  removeRoom,
  showModal,
  startDirectMessage,
}) => (
  <Container>
    <MessageWrapper>
      <MessageList messages={chatRoom.messages} />
      <FormBox>
        <Form {...{ sendMessage }} />
      </FormBox>
    </MessageWrapper>
    <UserListWrapper>
      <UserListBarContainer />
      {/* <UserList
        users={chatRoom.users}
        master={chatRoom.master}
        showModal={showModal}
        startDirectMessage={startDirectMessage}
      /> */}
    </UserListWrapper>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const MessageWrapper = styled.div`
  flex-grow: 1;
`;
const UserListWrapper = styled.div`
  flex-basis: 210px;
  background: ${Color.gray};
`;
const FormBox = styled.div`
  height: 8%;
`;

export default ChatRoom;
