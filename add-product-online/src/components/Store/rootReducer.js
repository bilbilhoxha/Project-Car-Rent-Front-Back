// rootReducer.js
import rootReducer from './rootreducers'; // Correct if filename is rootreducers.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add more reducers if needed
});

export default rootReducer;
