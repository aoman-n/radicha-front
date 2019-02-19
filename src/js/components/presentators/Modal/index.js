/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';
import LoginModal from './LoginModal';
import CreateRoomModal from './CreateRoomModal';
import EjectFromRoomModal from './EjectFromRoomModal';
import DirectMessaeModalContainer from '../../containers/DirectMessaeModalContainer';

export default ({
  modals,
  loginUser,
  createRoom,
  hideModal,
  loginErrorMessage,
}) => {
  const { login, create, eject, direct } = modals;
  return (
    <PoseGroup>
      {login && [
        <StyledShade key="shade" onClick={() => hideModal('login')} />,
        <StyledModal key="modal">
          <LoginModal {...{ hideModal, loginUser, loginErrorMessage }} />
        </StyledModal>,
      ]}
      {create && [
        <StyledShade key="shade" onClick={() => hideModal('login')} />,
        <StyledModal key="modal">
          <CreateRoomModal {...{ hideModal, createRoom }} />
        </StyledModal>,
      ]}
      {eject && [
        <StyledShade key="shade" onClick={() => hideModal('login')} />,
        <StyledModal key="modal">
          <EjectFromRoomModal {...{ hideModal }} />
        </StyledModal>,
      ]}
      {direct && [
        <StyledDirectModal key="modal">
          <DirectMessaeModalContainer />
        </StyledDirectModal>,
      ]}
    </PoseGroup>
  );
};

/* login, create, eject */
const Modal = posed.div({
  enter: {
    opacity: 1,
    y: '-50%',
    x: '-50%',
    delay: 300,
    transition: {
      default: { duration: 200 },
    },
  },
  exit: {
    opacity: 0,
    y: '-20%',
    x: '-50%',
    transition: { duration: 200 },
  },
});
const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});
const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 500px;
  height: 50%;
  max-height: 350px;
  z-index: 2;
`;
const StyledShade = styled(Shade)`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.6);
`;

/* direct */
const DirectModal = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    x: '0%',
    y: '0%',
    transition: {
      duration: 400,
      y: { type: 'spring', stiffness: 220, damping: 20 },
      x: { type: 'spring', stiffness: 220, damping: 20 },
    },
  },
  exit: {
    scale: 0.2,
    opacity: 0.7,
    x: '-100%',
    y: '100%',
    transition: {
      duration: 400,
    },
  },
});
const StyledDirectModal = styled(DirectModal)`
  position: absolute;
  left: 15px;
  bottom: 15px;
  height: 60%;
  width: 35%;
  min-width: 300px;
  max-width: 400px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;
