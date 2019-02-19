/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { withState, withHandlers, pure, compose } from 'recompose';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Color from '../constants/Color';

library.add(faTimes);

const enhancer = compose(
  withState('inputText', 'updateText', ''),
  withHandlers({
    onChangeText: ({ updateText }) => e => {
      updateText(e.target.value);
    },
    clearText: ({ updateText }) => () => {
      updateText('');
    },
  }),
  pure,
);

export default enhancer(
  ({ loginUser, inputText, onChangeText, hideModal, loginErrorMessage }) => (
    <Wrapper>
      <InfoContainer>名前を入力してログインして下さい。</InfoContainer>
      <FormContainer>
        <InputArea>
          <Input type="text" value={inputText} onChange={onChangeText} />
          <ErrorMessage>{loginErrorMessage}</ErrorMessage>
          <Description>※8文字以内で入力してください</Description>
        </InputArea>
        <Button
          onClick={() => {
            loginUser(inputText);
          }}
        >
          ログイン
        </Button>
      </FormContainer>
      <CloseIcon onClick={() => hideModal('login')} icon="times" size="lg" />
    </Wrapper>
  ),
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 6px;
  position: relative;
  color: ${Color.dark50};
`;
const InfoContainer = styled.div`
  font-size: 1.1rem;
  background: ${Color.base2};
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;
const FormContainer = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputArea = styled.div`
  width: 70%;
`;
const Input = styled.input`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: 0.9em;
  padding: 0 10px;
  border: 1px solid ${Color.gray20};
  &:focus {
    outline: 2px ${Color.skyblue} solid;
  }
`;
const ErrorMessage = styled.p`
  padding-top: 8px;
  text-align: center;
  color: red;
`;
const Description = styled.p`
  padding-top: 8px;
  text-align: center;
`;
const Button = styled.button`
  width: 40%;
  background: white;
  color: ${Color.main2};
  margin: 20px 0;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${Color.main2};
  border-radius: 3px;
  height: 40px;
  overflow: visible;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: ${Color.main2};
    color: white;
    transition: 0.3s;
  }
`;
const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${Color.dark50};
  :hover {
    cursor: pointer;
  }
`;
