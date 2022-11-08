import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../services/navRef';
import Navigation from './Navigation';

const Stack = createStackNavigator();

export default function Route() {
    return (
         <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
              {Navigation(Stack)}
           </Stack.Navigator>
        </NavigationContainer>
  );
}
