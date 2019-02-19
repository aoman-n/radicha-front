/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import CircularProgress from '@material-ui/core/CircularProgress';
import Color from '../constants/Color';

export default () => (
  <Container>
    <CircularProgress
      size={60}
      color="primary"
      style={{ color: `${Color.gray}` }}
    />
  </Container>
);

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
