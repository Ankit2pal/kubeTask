import { call, put, takeLatest } from 'redux-saga/effects';
import { callLoginApi } from '../../services/loginApi';
import SessionStorageHandler from '../../utils/SessionStorageHandler';
import {
  onLoginSubmit,
  onLoginSubmitError,
  onLoginSubmitSuccess
} from '../modules/loginFormSlice';

function* doLogin({ payload }) {
  const { EmailId, PasswordHash } = payload;
  if (EmailId && PasswordHash) {
    try {
       const loginResponse = yield call(callLoginApi, EmailId, PasswordHash);
       const { message, Username, UserId } = loginResponse;
     if (Username && UserId && UserId) {
        yield put(onLoginSubmitSuccess({ data: { Username, UserId }, message }));
      } else {
       yield put(onLoginSubmitError({ data: { Username, UserId }, message }));
      }
    } catch (error) {
      const message = error.response.data.Message || 'Something went wrong';
      yield put(onLoginSubmitError({ data: {}, message }));
    }
  }
}

export default function* loginSaga() {
  yield takeLatest(onLoginSubmit, doLogin);
}
