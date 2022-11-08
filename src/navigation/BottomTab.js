import React from 'react';
import {View,
    Text
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'; 
import Profile from '../screens/Profile/Profile';
import Package from '../screens/Package/Package';
import Search from '../screens/Search/Search';
import Notification from '../screens/Notification/Notification';
import DashboardStack from './DashboardStack';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={{ 
            headerShown: false,
            tabBarInactiveTintColor: "#101010",
            tabBarActiveTintColor: "#101010"
         }}
                initialRouteName="Dashboard"
        >
            <Tab.Screen name="Dashboard" component={DashboardStack}  options={{
                tabBarIcon: ({ focused }) => (  
                    <View>  
                        <MaterialCommunityIcons
                        color={focused ? "#F14046" : "#101010"}
                         size={25}
                         name={'view-dashboard'}/>  
                    </View>),  
                    }} /> 
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (  
                    <View>  
                        <Ionicons
                         color={focused ? "#F14046" : "#101010"}
                         size={25} 
                         name={'ios-person'}/>  
                    </View>),  
            }} /> 
            <Tab.Screen name="Package" component={Package} options={{
                tabBarLabel: () => null,
                tabBarIcon: ({ focused }) => (  
                    <View style={{  position: 'relative',
                        borderRadius: 25,
                        margin: 5,
                        borderColor: '#000000',
                        borderWidth: 1,
                        padding:4
            }}>  
                    <Text style={{fontSize:15, fontWeight:"600",}}>  
                    PACKAGE</Text>
                    </View>),  
            }}  

            /> 
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ focused }) => (  
                    <View>  
                        <FontAwesomeIcon 
                        color={focused ? "#F14046" : "#101010"}
                        size={25} 
                        name={'search'}/>  
                    </View>),
            }} /> 
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon: ({ focused }) => (  
                    <View>  
                        <Ionicons 
                        color={focused ? "#F14046" : "#101010"} 
                        size={25} 
                        name={'notifications'}/>  
                    </View>),  
            }}  /> 
        </Tab.Navigator>
    )
}

export default BottomTab;