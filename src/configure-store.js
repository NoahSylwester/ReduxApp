import { createStore, combineReducers } from 'redux';
import { countReducer as count } from './counter/reducer';
import { writeReducer as write } from './writer/reducer';
import { drawReducer as draw } from './drawer/reducer';

const combinedReducer = combineReducers({
    write,
    count,
    draw
  })

const store = createStore(combinedReducer);
export default store;