import { call, put, takeLatest } from 'redux-saga/effects';
import { callForgotPasswordApi } from '../../services/forgotPasswordApi';
import {
  onForgotPasswordSubmit,
  onForgotPasswordSubmitError,
  onForgotPasswordSubmitSuccess
} from '../modules/forgotPasswordSlice';

function* doForgotPasswordAction({ payload }) {
  const { email } = payload;
  if (email) {
    try { 
      const forgotPasswordResponse = yield call(callForgotPasswordApi, email);
      const { Message, Data } = forgotPasswordResponse;
      if (Data && Data.uid) {
        yield put(onForgotPasswordSubmitSuccess({ data: { uid: Data.uid }, message: Message }));
      } else {
        yield put(onForgotPasswordSubmitError({ data: { uid: Data.uid }, message: Message }));
      }
    } catch (error) {
      const message = error.response.data.Message || 'Something went wrong';
      yield put(onForgotPasswordSubmitError({ data: { message }, message }));
    }
  }
}

export default function* forgotPasswordSaga() {
  yield takeLatest(onForgotPasswordSubmit.type, doForgotPasswordAction);
}
