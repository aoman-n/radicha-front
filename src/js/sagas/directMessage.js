import { fork, select, takeEvery, put, take, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on(
      'receive direct message',
      ({ username, text, partnerSocketId }) => {
        emit(
          actions.startDirectMessage({
            name: username,
            socketId: partnerSocketId,
          }),
        );
        emit(
          actions.addDirectMessage({
            messageObj: { type: 'incoming', text },
            partnerSocketId,
          }),
        );
        emit(actions.showModal('direct'));
      },
    );
    return () => {};
  });
}

function* write(socket) {
  while (true) {
    // payloadは送信するtext
    const { payload } = yield take(actions.SEND_DIRECT_MESSAGE);
    const {
      directMessage: { currentPartnerUser },
      app: { username },
    } = yield select(state => state);
    const { socketId } = currentPartnerUser;
    const directMessageData = {
      partnerSocketId: socketId,
      username,
      text: payload,
    };
    socket.emit('send direct message', directMessageData);
    const messageObj = { type: 'outgoing', text: payload };
    yield put(
      actions.addDirectMessage({ messageObj, partnerSocketId: socketId }),
    );
  }
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

function* handleIO() {
  const { socket } = yield select(state => state.app);
  yield fork(write, socket);
  yield fork(read, socket);
}

function* cancelTask(task) {
  // TODO: ここにタスクのキャンセル処理を記入
}

function* handleSocketSet() {
  const task = yield takeEvery(actions.SET_SOCKET, handleIO);
  yield fork(cancelTask, task);
}

function* handleStartDirectMessage() {
  while (true) {
    yield take(actions.START_DIRECT_MESSAGE);
  }
}

export default function*() {
  yield fork(handleSocketSet);
  yield fork(handleStartDirectMessage);
}
