/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Color from './constants/Color';
import Header from './Header';
import RoomBar from './RoomBar';
import ChatContainer from '../containers/ChatContainer';
import ModalContainer from '../containers/ModalContainer';

const Home = ({
  match,
  viewContents,
  toggleRoombar,
  showModal,
  logoutUser,
  app,
}) => {
  const { isRoomBar, roomList } = viewContents;
  const { username } = app;
  return (
    <Container>
      <ModalContainer />
      <HeaderArea>
        <Header {...{ showModal, toggleRoombar, username, logoutUser }} />
      </HeaderArea>
      <MainWrapper>
        <Drawer isRoomBar={isRoomBar}>
          <RoomBar {...{ roomList, showModal }} />
        </Drawer>
        <ChatRoom>
          <Switch>
            <Route
              exact
              path={`${match.url}room/:roomId`}
              component={ChatContainer}
            />
          </Switch>
        </ChatRoom>
      </MainWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const HeaderArea = styled.div`
  height: 50px;
  width: 100%;
  background-image: linear-gradient(-180deg, #70dcb7 0%, #3db680 100%);
`;
const MainWrapper = styled.div`
  display: flex;
  height: calc(100% - 50px);
`;
const Drawer = styled.div`
  flex-basis: ${({ isRoomBar }) => (isRoomBar ? 230 : 0)}px;
  transform: translateX(${({ isRoomBar }) => (isRoomBar ? 0 : -230)}px);
  opacity: ${({ isRoomBar }) => (isRoomBar ? 1 : 0)};
  border-right: 1px solid #e5e5e5;
  transition: 0.7s;
`;
const ChatRoom = styled.div`
  flex: 1;
`;

export default hot(Home);
