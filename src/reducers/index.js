import { combineReducers } from 'redux';
import board from './boardReducer.js';

const allReducers = combineReducers({
  board: board,
});

export default allReducers;
