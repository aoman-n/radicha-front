import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { compose, lifecycle } from 'recompose';
import Color from '../../constants/Color';

const enhancer = compose(
  lifecycle({
    componentDidUpdate() {
      let obj = document.getElementsByClassName('message');
      obj = obj[obj.length - 1];
      obj.scrollIntoView({ behavior: 'smooth', block: 'end' });
    },
  }),
);

const MessageList = ({ messages }) => (
  <Container>
    {messages.map((message, i) => (
      <Message key={i} className="message">
        <Head>{message.user}</Head>
        <Text>{message.text}</Text>
      </Message>
    ))}
  </Container>
);

const Container = styled.ul`
  height: 92%;
  overflow: auto;
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-7px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Message = styled.li`
  padding: 1.4rem 2rem;
  color: ${Color.gray};
  animation: ${fadeIn} 0.3s ease 0s 1 normal;
  &:nth-child(even) {
    background: ${Color.base2};
  }
`;
const Head = styled.p`
  font-size: 0.9rem;
  padding-bottom: 0.8rem;
  color: ${Color.main2};
  font-weight: bold;
`;
const Text = styled.p`
  font-size: 0.8rem;
`;

export default enhancer(MessageList);
