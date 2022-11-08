import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import {
  onLoginSubmit,
  resetLoginDetail,
} from '.././../redux/modules/loginFormSlice';
import { createSelector } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../Commons/Loader/Loader';
const LoginFormContainer = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userdetails = useSelector((state) => state.loginDetails);
  const userId = useSelector(
    createSelector(
      [(state) => state.loginDetails.data.UserId],
      (UserId = '') => {
        return UserId;
      }
    )
  );
  const [ isLoader, SetIsLoader] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const loginSubmit = (values) => {
    dispatch(resetLoginDetail(values));
    SetIsLoader(true)
    dispatch(onLoginSubmit(values));
  };

  useEffect(() => {
    if (!userdetails?.isError && userId) {
      SetIsLoader(false)
      navigation.navigate('List');
    } else {
      setWrongPassword(userdetails?.isError);
    }
    
  }, [userId, userdetails]);

  useEffect(() => {
    dispatch(resetLoginDetail());
  }, []);
  useEffect(() => {
    if (!userdetails?.isLoading){
      SetIsLoader(false)
    }
  }, [userdetails?.isLoading]);
  
  return (
    
      <>
      <LoginForm
      loginSubmit={loginSubmit}
      wrongPassword={wrongPassword} />
     {isLoader &&  <Loader />}</>
  );
};
export default LoginFormContainer;
