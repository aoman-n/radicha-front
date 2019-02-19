/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '../constants/Color';

library.add(faTimes);

export default ({ sendDirectMessage, messageList, partnerName, hideModal }) => {
  const [text, setText] = useState('');
  const isDisabled = text.length === 0;
  return (
    <Wrapper>
      <Title>{partnerName}</Title>
      <MessageList>
        {messageList.map((message, i) => {
          const { type, text } = message;
          return (
            <Message type={type} key={i}>
              <Text type={type}>{text}</Text>
            </Message>
          );
        })}
      </MessageList>
      <Form>
        <Input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button
          disabled={isDisabled}
          onClick={e => {
            e.preventDefault();
            sendDirectMessage(text);
            setText('');
          }}
        >
          送信
        </Button>
      </Form>
      <CloseIcon onClick={() => hideModal('direct')} icon="times" size="lg" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
  color: ${Color.dark50};
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 0.8rem;
  padding: 1rem 0;
  text-align: center;
  font-weight: bold;
  color: white;
  background: ${Color.gray};
`;
const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 2px;
  color: white;
  :hover {
    cursor: pointer;
  }
`;
const MessageList = styled.div`
  flex: 1;
  padding: 20px 20px;
  box-sizing: border-box;
  overflow-y: auto;
  background: ${Color.lightGray};
`;
const Message = styled.div`
  margin: 15px 0;
  text-align: ${props => (props.type === 'incoming' ? 'left' : 'right')};
  font-size: 0.8rem;
`;
const outgoingStyles = css`
  line-height: 1rem;
  display: inline-block;
  position: relative;
  text-align: left;
  margin: 0 10px 0 0;
  padding: 9px;
  max-width: 250px;
  border-radius: 12px;
  background: #30e852;
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: -18px;
    border: 8px solid transparent;
    border-left: 18px solid #30e852;
    -ms-transform: rotate(-35deg);
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }
`;
const incomingStyles = css`
  display: inline-block;
  position: relative;
  margin: 0 0 0 10px;
  padding: 9px;
  max-width: 250px;
  border-radius: 12px;
  background: white;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0px;
    left: -18px;
    border: 8px solid transparent;
    border-right: 18px solid white;
    -ms-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }
`;
const Text = styled.p`
  ${props =>
    props.type === 'incoming'
      ? css`
          ${incomingStyles}
        `
      : css`
          ${outgoingStyles}
        `}
`;
const Form = styled.form`
  flex-basis: 40px;
  box-sizing: border-box;
`;
const Input = styled.input`
  height: 100%;
  width: 74%;
  box-sizing: border-box;
  padding: 0.3rem 0.5rem;
  margin: 0;
  outline: none;
  &:focus {
    border: 2px solid ${Color.main2};
  }
`;
const Button = styled.button`
  height: 100%;
  width: 26%;
  font-size: 0.9rem;
  color: ${props => (props.disabled ? `${Color.gray30}` : 'white')};
  background: ${props =>
    props.disabled ? `${Color.gray10}` : `${Color.main2}`};
  box-sizing: border-box;
  cursor: pointer;
  margin: 0;
`;
