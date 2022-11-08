import { createSlice } from '@reduxjs/toolkit';

export const loginFormSlice = createSlice({
  name: 'login',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onLoginSubmit: (state) => {
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onLoginSubmitSuccess: (state, { payload }) => {
      const { data = {}, message = '' } = payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        data,
        error: {},
        message
      };
    },
    onLoginSubmitError: (state, { payload }) => {
      const { data = {}, message = '' } = payload;
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: data,
        message
      };
    },
    resetLoginDetail: () => {
      return {
        isLoading: false,
        isError: false,
        data: {},
        error: {},
        message: ''
      };
    }
  }
});

export const { onLoginSubmit, onLoginSubmitError, onLoginSubmitSuccess,resetLoginDetail } = loginFormSlice.actions;

export default loginFormSlice.reducer;
