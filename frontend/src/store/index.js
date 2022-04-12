import { configureStore } from '@reduxjs/toolkit';
import keyPadReducer from '../components/keypad/reducer/keypadSlice';

export const store = configureStore({
  reducer: {
    keypad: keyPadReducer,
  },
});
