import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    onSubmitDetails,
} from '../../../redux/modules/completeRegisterationSlice';
import FamilyPartPref from './FamilyPartPref';
// import { useNavigation } from '@react-navigation/native';
const FamilyPartPrefContainer = ({ }) => {

  const dispatch = useDispatch();

  const formSubmit = (values) => {
    dispatch(onSubmitDetails(values));
  };
  return (
    <>
      <FamilyPartPref
    formSubmit={formSubmit}
         />
    </>
  );
};
export default FamilyPartPrefContainer;
