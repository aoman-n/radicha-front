/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

export default ({ showModal, toggleRoombar, logoutUser, username }) => (
  <Container>
    <Logo to="/">
      <Image alt="Logo Image" src={logoImage} />
    </Logo>
    <Nav>
      {username || username !== null ? (
        <Ul>
          <Li onClick={() => showModal('direct')}>directModal</Li>
          <Li onClick={() => showModal('login')}>
            使用中の名前：
            <Name>{username}</Name>
          </Li>
          <Link to="/">
            <Li onClick={logoutUser}>ログアウト</Li>
          </Link>
        </Ul>
      ) : (
        <Ul>
          <Li onClick={() => showModal('login')}>ログイン</Li>
        </Ul>
      )}
    </Nav>
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled(Link)`
  margin-right: auto;
  padding: 0 30px;
  height: 38%;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;
const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;
const Nav = styled.nav``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Li = styled.li`
  font-size: 0.8rem;
  color: white;
  position: relative;
  display: inline-block;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Name = styled.span`
  color: white;
  font-weight: 700;
  padding-right: 5px;
`;
