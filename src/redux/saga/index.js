import { fork } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import forgotPasswordSaga from './forgotPasswordSaga';
import registerSaga from './registerSaga';
import completeRegisterationSaga from './completeRegisterationSaga';  
import notificationSaga from './getNotificationSaga';
export default function* rootSaga() {
  yield [
    fork(loginSaga),
    fork(forgotPasswordSaga),
    fork(registerSaga),
    fork(notificationSaga),
    fork(completeRegisterationSaga)];

}
