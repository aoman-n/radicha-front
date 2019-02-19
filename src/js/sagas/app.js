import { fork, take, call, put, select, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';

function* runGetUserName() {
  const username = yield localStorage.getItem('username');
  if (username) {
    yield put(actions.loginUser(username));
  } else {
    console.log('not found username in localstorage');
    yield put(actions.showModal('login'));
  }
}

function* joinToCreatedRoom(context) {
  while (true) {
    const { payload } = yield take(actions.JOIN_TO_CREATED_ROOM);
    yield call(context.history.push, `/room/${payload}`);
  }
}

function* handleGetUeserName() {
  yield takeEvery(actions.SET_SOCKET, runGetUserName);
}

function* loginUser() {
  while (true) {
    const { payload } = yield take(actions.LOGIN_USER);
    const { socket } = yield select(state => state.app);
    if (socket) {
      socket.emit('login', payload);
      window.localStorage.setItem('username', payload);
    }
  }
}

function* logoutUser() {
  while (true) {
    yield take(actions.LOGOUT_USER);
    const { socket } = yield select(state => state.app);
    socket.emit('logout');
    localStorage.clear();
  }
}

function* runCreateRoom() {
  while (true) {
    const { payload } = yield take(actions.CREATE_ROOM);
    const { socket } = yield select(state => state.app);
    socket.emit('create room', payload);
  }
}

export default function*(context) {
  yield fork(handleGetUeserName);
  yield fork(loginUser);
  yield fork(logoutUser);
  yield fork(runCreateRoom);
  yield fork(joinToCreatedRoom, context);
}
