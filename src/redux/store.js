import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketSlice from './rocketSlice';

const reducer = combineReducers({
  rockets: rocketSlice,
});
const store = configureStore({
  reducer,
});
export default store;
