import { fork, take, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('login succeed', username => {
      console.log(`${username}としてログインしました。`);
      emit(actions.hideModal('login'));
      emit(actions.setUserName(username));
    });
    socket.on('login failed', username => {
      console.log(`${username}は使用できません。`);
      emit(actions.loginError(`${username}は使用できません。`));
    });
    socket.on('add room', name => {
      emit(actions.addRoom(name));
    });
    socket.on('removed room', name => {
      emit(actions.deleteRoomFromList(name));
    });
    socket.on('created room', name => {
      emit(actions.joinToCreatedRoom(name));
    });
    return () => {};
  });
}

function* runOnRoomList(socket) {
  if (socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  }
}

function* handleOnRoomList() {
  while (true) {
    const { payload } = yield take(actions.SET_SOCKET, runOnRoomList);
    yield fork(runOnRoomList, payload);
  }
}

export default function*() {
  yield fork(handleOnRoomList);
}
