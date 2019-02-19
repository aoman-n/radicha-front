import { createAction } from 'redux-actions';
/* eslint-disable */

// actions
/* initialize */
export const INITIALIZE = 'INITIALIZE';
/* app */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_USER_NAME = 'SET_USER_NAME';
export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const SET_SOCKET = 'SET_SOCKET';
export const DELETE_SOCKET = 'DELETE_SOCKET';
export const CREATE_ROOM = 'CREATE_ROOM';
export const JOIN_TO_CREATED_ROOM = 'JOIN_TO_CREATED_ROOM';
/* chatRoom */
export const NOT_FOUND_ROOM = 'NOT_FOUND_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';
export const INITIALIZE_ROOM_DATA = 'INITIALIZE_ROOM_DATA';
export const SENT_MESSAGE = 'SEND_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_ROOM_USER = 'ADD_ROOM_USER';
export const REMOVE_ROOM_USER = 'REMOVE_ROOM_USER';
export const SWITCH_ROOM_MASTER = 'SWITCH_ROOM_MASTER';
export const REMOVE_ROOM = 'REMOVE_ROOM';
export const EJECT_FROM_ROOM = 'EJECT_FROM_ROOM';
/* viewContents */
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const GET_ROOM_LIST = 'GET_ROOM_LIST';
export const SET_ROOM_LIST = 'SET_ROOM_LIST';
export const TOGLLE_ROOMBAR = 'TOGLLE_ROOMBAR';
export const ADD_ROOM = 'ADD_ROOM';
export const DELETE_ROOM_FROM_LIST = 'DELETE_ROOM_FROM_LIST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
/* directMessage */
export const START_DIRECT_MESSAGE = 'START_DIRECT_MESSAGE';
export const SEND_DIRECT_MESSAGE = 'SEND_DIRECT_MESSAGE';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';
export const ADD_DIRECT_MESSAGE = 'ADD_DIRECT_MESSAGE';

// actions creators
/* initialize */
export const initialize = createAction(INITIALIZE);
/* app */
export const loginUser = createAction(LOGIN_USER);
export const logoutUser = createAction(LOGOUT_USER);
export const setUserName = createAction(SET_USER_NAME);
export const createConnection = createAction(CREATE_CONNECTION);
export const setSocket = createAction(SET_SOCKET);
export const delteSocket = createAction(DELETE_SOCKET);
export const createRoom = createAction(CREATE_ROOM);
export const joinToCreatedRoom = createAction(JOIN_TO_CREATED_ROOM);
/* chatRoom */
export const notFoundRoom = createAction(NOT_FOUND_ROOM);
export const joinRoom = createAction(JOIN_ROOM);
export const initializeRoomData = createAction(INITIALIZE_ROOM_DATA);
export const sendMessage = createAction(SENT_MESSAGE);
export const addMessage = createAction(ADD_MESSAGE);
export const addRoomUser = createAction(ADD_ROOM_USER);
export const removeRoomUser = createAction(REMOVE_ROOM_USER);
export const switchRoomMaster = createAction(SWITCH_ROOM_MASTER);
export const removeRoom = createAction(REMOVE_ROOM);
export const ejectFromRoom = createAction(EJECT_FROM_ROOM);
/* viewContents */
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);
export const getRoomList = createAction(GET_ROOM_LIST);
export const setRoomList = createAction(SET_ROOM_LIST);
export const toggleRoombar = createAction(TOGLLE_ROOMBAR);
export const addRoom = createAction(ADD_ROOM);
export const deleteRoomFromList = createAction(DELETE_ROOM_FROM_LIST);
export const loginError = createAction(LOGIN_ERROR);
/* directMessage */
export const startDirectMessage = createAction(START_DIRECT_MESSAGE);
export const sendDirectMessage = createAction(SEND_DIRECT_MESSAGE);
export const receiveDirectMessage = createAction(RECEIVE_DIRECT_MESSAGE);
export const addDirectMessage = createAction(ADD_DIRECT_MESSAGE);
