import { fork } from 'redux-saga/effects';
import initialize from './initialize';
import chatRoom from './chatRoom';
import app from './app';
import recieveRoomList from './recieveRoomList';
import directMessage from './directMessage';

export default function* rootSaga(context) {
  yield fork(chatRoom, context);
  yield fork(initialize);
  yield fork(app, context);
  yield fork(recieveRoomList);
  yield fork(directMessage);
}
