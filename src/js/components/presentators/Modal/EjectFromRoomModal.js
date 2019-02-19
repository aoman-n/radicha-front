/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

export default ({ hideModal }) => (
  <Wrapper>
    <TextContainer>ルームが解散となりました(´・ω・｀)</TextContainer>
    <CloseButton onClick={() => hideModal('eject')}>閉じる</CloseButton>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
const TextContainer = styled.p`
  padding: 60px;
`;
const CloseButton = styled.button`
  background: white;
  color: #696969;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #696969;
  border-radius: 3px;
  height: 40px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #696969;
    color: white;
    transition: 0.3s;
  }
`;
