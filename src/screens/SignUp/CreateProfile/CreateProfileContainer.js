import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateProfile from './CreateProfile';
import {
  onRegisterSubmit,
} from '../../../redux/modules/registerSlice';
// import { useNavigation } from '@react-navigation/native';
const CreateProfileContainer = ({ }) => {

  const dispatch = useDispatch();

  const registerSubmit = (values) => {
    dispatch(onRegisterSubmit(values));
  };
  return (
    <>
      <CreateProfile
        registerSubmit={registerSubmit} />
    </>
  );
};
export default CreateProfileContainer;
