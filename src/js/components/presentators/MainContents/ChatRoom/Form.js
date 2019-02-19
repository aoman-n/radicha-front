import React, { useState } from 'react';
import styled from '@emotion/styled';
import Color from '../../constants/Color';

/* eslint-disable */
const Form = ({ sendMessage }) => {
  const [text, setText] = useState('');
  return (
    <Container
      onSubmit={e => {
      e.preventDefault();
      sendMessage(text);
      setText('');
    }}
    >
      <Input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button type="submit"><span>送</span>信</Button>
    </Container>
  )
}

const Container = styled.form`
  height: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
  border-top: 1px solid ${Color.lightGray};
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  height: 67%;
  width: 70%;
  margin-right: 20px;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9rem;
  padding: 0 0.5rem;
  border: 1px solid ${Color.lightGray};
  border-radius: 3px;
  &:focus {
    outline: 1px ${Color.main} solid;
    border-radius: 3px;
  }
`;
const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  background: white;
  color: ${Color.main};
  padding: 0.25rem 1rem;
  border: 2px solid ${Color.main};
  border-radius: 3px;
  height: 67%;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${Color.main};
    color: white;
    transition: 0.3s;
  }
  & span {
    letter-spacing: 0.4rem;
  }
`;

export default Form;