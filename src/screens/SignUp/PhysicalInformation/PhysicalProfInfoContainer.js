import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    onSubmitDetails,
} from '../../../redux/modules/completeRegisterationSlice';
import PhysicalProfInfo from './PhysicalProfInfo';
// import { useNavigation } from '@react-navigation/native';
const PhysicalProfInfoContainer = ({ }) => {

  const dispatch = useDispatch();

  const formSubmit = (values) => {
    dispatch(onSubmitDetails(values));
  };
  return (
    <>
      <PhysicalProfInfo
    formSubmit={formSubmit}
         />
    </>
  );
};
export default PhysicalProfInfoContainer;
