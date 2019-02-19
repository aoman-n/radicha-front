import axios from 'axios';
import config from '../config';

export function getRoomList() {
  return axios
    .get(`${config.url}/rooms`)
    .then(results => {
      const { roomList } = results.data;
      return { roomList };
    })
    .catch(error => ({ error }));
}

// 現状使っていない
export function createRoom(roomname) {
  return axios
    .post(`${config.url}/room`, { roomname })
    .then(results => {
      const { room } = results.data;
      return { room };
    })
    .catch(error => ({ error }));
}
