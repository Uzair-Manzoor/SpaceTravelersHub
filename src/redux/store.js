import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import MissionSlice from './missionSlice';
import rocketsReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
