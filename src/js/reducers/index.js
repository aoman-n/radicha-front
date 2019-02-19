import { combineReducers } from 'redux';
import app from './app';
import chatRoom from './chatRoom';
import viewContents from './viewContents';
import directMessage from './directMessage';

export default combineReducers({
  app,
  chatRoom,
  viewContents,
  directMessage,
});
