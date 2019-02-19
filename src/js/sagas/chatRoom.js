import { take, put, fork, select, call, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('not found room', () => {
      console.log('ルームが見つかりませんでした');
      emit(actions.notFoundRoom());
    });
    socket.on('chat message', msg => {
      console.log('メッセージを受け取りました');
      emit(actions.addMessage(msg));
    });
    socket.on('user join', userData => {
      console.log(`joinしたuser: ${userData.name}`);
      emit(
        actions.addMessage({
          user: '',
          text: `${userData.name}さん が入室しました`,
        }),
      );
      emit(actions.addRoomUser(userData));
    });
    socket.on('initialize room data', data => {
      console.dir(data);
      emit(actions.initializeRoomData(data));
    });
    socket.on('leave user', userId => {
      console.log(`leaveしたuser: ${userId}`);
      emit(actions.removeRoomUser(userId));
      emit(actions.switchRoomMaster());
    });
    socket.on('eject from room', () => {
      emit(actions.ejectFromRoom());
    });
    return () => {};
  });
}

function* read(socket) {
  if (socket) {
    const channel = yield call(subscribe, socket);
    while (true) {
      const action = yield take(channel);
      console.log('action:', action);
      yield put(action);
    }
  }
}

function* write(socket) {
  while (true) {
    const { payload } = yield take(actions.SENT_MESSAGE);
    const { username } = yield select(state => state.app);
    const message = { user: username, text: payload };
    yield put(actions.addMessage(message));
    socket.emit('chat message', payload);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* cancelTask(task, socket) {
  const e = yield take([actions.LOGOUT_USER, actions.JOIN_ROOM]);
  yield cancel(task);
  // @TODO REFACTOR
  if (e.type === 'LOGOUT_USER') {
    socket.emit('logout');
  }
}

function* joinRoom() {
  while (true) {
    const { payload } = yield take(actions.JOIN_ROOM); // payload = roomname
    const { socket, username } = yield select(state => state.app);
    if (socket) {
      const task = yield fork(handleIO, socket);
      socket.emit('join', { username, roomname: payload });
      yield fork(cancelTask, task, socket);
    }
  }
}

function* removeRoom() {
  while (true) {
    yield take(actions.REMOVE_ROOM);
    const {
      app: { socket },
      chatRoom: { roomname },
    } = yield select(state => state);
    socket.emit('remove room', roomname);
  }
}

function* runEjectFromRoom(context) {
  while (true) {
    yield take(actions.EJECT_FROM_ROOM);
    const { socket } = yield select(state => state.app);
    socket.emit('leave the room');
    yield call(context.history.push, '/');
    yield put(actions.showModal('eject'));
  }
}

export default function*(context) {
  yield fork(joinRoom);
  yield fork(removeRoom);
  yield fork(runEjectFromRoom, context);
}
