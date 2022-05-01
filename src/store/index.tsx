import { configureStore } from '@reduxjs/toolkit';
import qrCodeReducer from './slices/qrCodeSlice';

const store = configureStore({
  reducer: {
    qrCode: qrCodeReducer
  }
});

export default store;
