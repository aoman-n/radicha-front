import { put, fork, call, takeEvery } from 'redux-saga/effects';
import io from 'socket.io-client';
import * as actions from '../actions';
import config from '../config';
import { getRoomList } from '../utils/api';

function connect() {
  const socket = io(config.url);
  return new Promise(resolve => {
    socket.on('connect', () => {
      console.log('success connect');
      resolve(socket);
    });
  });
}

function* runGetRoomList() {
  const { roomList, error } = yield call(getRoomList);
  if (roomList) {
    yield put(actions.setRoomList(roomList));
  } else {
    // @TODO エラーハンドリング
    console.log(error);
  }
}

function* runGetSocket() {
  const socket = yield call(connect);
  yield put(actions.setSocket(socket));
}

function* handleGetRoomList() {
  yield takeEvery(actions.INITIALIZE, runGetRoomList);
}

function* handleGetSocket() {
  yield takeEvery(actions.INITIALIZE, runGetSocket);
}

export default function*() {
  yield fork(handleGetRoomList);
  yield fork(handleGetSocket);
}
