import { useDispatch } from 'react-redux';
import ForgotPassword from './ForgotPassword';
import { onForgotPasswordSubmit } from '../../redux/modules/forgotPasswordSlice';

const ForgotPasswordContainer = ({}) => {
const dispatch = useDispatch();
 
 const forgotPass = (values) => {
    dispatch(onForgotPasswordSubmit(values));
  };

  return (
    <ForgotPassword
      forgotPass={forgotPass}
       />
  );
};

export default ForgotPasswordContainer;
