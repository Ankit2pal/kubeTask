
import loginFormSlice from './modules/loginFormSlice';
import forgotPasswordReducer from './modules/forgotPasswordSlice';
import registerReducer from './modules/registerSlice';
import completeRegisterationReducer from './modules/completeRegisterationSlice';
import { combineReducers } from 'redux';
import notificationReducer from './modules/getNotificationSlice';
const reducers = combineReducers({
  loginDetails: loginFormSlice,
  forgotPasswordDetails: forgotPasswordReducer,
  formRegisterationDetails: registerReducer,
  completeRegisteration: completeRegisterationReducer,
  notification: notificationReducer,
});

export default reducers;
