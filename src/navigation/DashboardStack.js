import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Dashboard';
import Profile from '../screens/Profile/Profile';
import Packages from '../screens/Package/Package';
import Search from '../screens/Search/Search';
import Notification from '../screens/Notification/Notification';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
    return (
      <Stack.Navigator 
      screeOption={{
        headerShown: false,
      }}>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Package" component={Packages} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    );
  }