import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';

import Home from '../screens/Home';
import ShowUser from '../screens/ShowUser';
import AddUser from '../screens/AddUser';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

<Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#2a2cacff', 
            tabBarInactiveTintColor: '#737bb9ff', 
            tabBarStyle: { backgroundColor: '#FFF', 
              height: Platform.OS === 'ios' ? 80 : 60, 
           borderTopWidth: 0 }, 
            tabBarIcon: ({ focused, color, size }) => { 
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'ShowUser') {
            iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'AddUser') {
                       iconName = focused ? 'person-add' : 'person-add-outline';
              }
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          })}
        >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="ShowUser"
        component={ShowUser}
        options={{ title: 'ShowUser' }}
      />
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{ title: 'AddUser' }}
      />
    </Tab.Navigator>
    );
};

export default TabNavigator;
