import React from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';
import userIcon from '../../images/user_icon.png';
import messageIcon from '../../images/message_icon.png';

const UserListBar = ({
  roomUsers,
  directMessageUsers,
  master,
  showModal,
  startDirectMessage,
  ownName,
}) => (
  <React.Fragment>
    <UserListArea>
      <Title>Room内のユーザー</Title>
      <Ul>
        {roomUsers.map((user, i) => (
          <Li
            own={user.name === ownName}
            key={i}
            onClick={() => {
              if (user.name === ownName) return;
              startDirectMessage({ name: user.name, socketId: user.socket_id });
              showModal('direct');
            }}
          >
            <Icon alt="userIcon" src={userIcon} />
            {user.name}
          </Li>
        ))}
      </Ul>
    </UserListArea>
    <DirectMessageArea>
      <Title>ダイレクトメッセージ</Title>
      <Ul>
        {directMessageUsers.map((user, i) => (
          <Li
            key={user.socketId}
            onClick={() => {
              startDirectMessage({ name: user.name, socketId: user.socketId });
              showModal('direct');
            }}
          >
            <Icon alt="me" src={messageIcon} />
            {user.name}
          </Li>
        ))}
      </Ul>
    </DirectMessageArea>
  </React.Fragment>
);

const UserListArea = styled.div`
  padding: 1rem 1rem;
  overflow-y: auto;
  height: 60%;
  box-sizing: border-box;
  color: white;
`;
const Title = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;
const Ul = styled.ul``;
const Li = styled.li`
  font-weight: normal;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  cursor: ${props => (props.own ? 'default' : 'pointer')};
  &:hover {
    opacity: ${props => (props.own ? 1 : 0.8)};
  }
`;
const Icon = styled.img`
  padding-right: 0.6rem;
  vertical-align: middle;
  height: 10px;
`;
const DirectMessageArea = styled.div`
  padding: 1rem 1rem;
  overflow-y: auto;
  height: 40%;
  box-sizing: border-box;
  color: white;
`;

export default UserListBar;
