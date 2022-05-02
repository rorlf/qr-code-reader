import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'store/hooks';

interface QrCodeState {
  data: string[];
}

const initialState: QrCodeState = {
  data: []
};

export const slice = createSlice({
  name: 'qrCode',
  initialState,
  reducers: {
    addQrCode: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
    deleteQrCode: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload);
    }
  }
});

export const { addQrCode, deleteQrCode } = slice.actions;

export const useQrCode = () => useSelector(state => state.qrCode);

export default slice.reducer;
