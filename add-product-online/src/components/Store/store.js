// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducers'; // Assuming this is your root reducer

const store = createStore(rootReducer);

export default store;
