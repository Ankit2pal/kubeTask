import * as React from 'react';

import LoginFormContainer from '../screens/Login/LoginFormContainer';
import List from '../screens/List/List';
import Sign from '../screens/Sign/Sign';

import viewItem from '../screens/ViewItem/viewItem';
import ForgotPasswordContainer from '../screens/ForgotPassword/ForgotPasswordContainer';
export default function Navigation(Stack) {
  return (
    <>
    
           <Stack.Screen
        name="loginFormContainer"
        component={LoginFormContainer}
        options={{
          headerShown: false,
        }}
      /> 
       <Stack.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
        }}
      />  
           <Stack.Screen
        name="viewItem"
        component={viewItem}
        options={{
          headerShown: false,
        }}
      /> 
       <Stack.Screen
        name="Sign"
        component={Sign}
        options={{
          headerShown: false,
        }}
      /> 
       <Stack.Screen
        name="ForgotPasswordContainer"
        component={ForgotPasswordContainer}
        options={{
          headerShown: false,
        }}
      /> 
      
      
    </>
  );
}
