import React from 'react';
import styled from '@emotion/styled';
import Color from '../constants/Color';

export default () => (
  <Container>
    <Text>Error: 部屋が見つかりませんでした</Text>
    <Text>申し訳ございませんが、もう一度お試しください。</Text>
  </Container>
);

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  color: ${Color.dark50};
  margin: 10px 0;
`;
