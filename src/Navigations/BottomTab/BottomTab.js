import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
import HelpScreen from '../../Screens/HelpScreen/HelpScreen';
import AnnouncementSrc from '../../Screens/AnnouncementSrc/AnnouncementSrc';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          backgroundColor: '#E8E8E8',
          height: 90,
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 20,
          color: '#000',
          fontWeight:'800'
        },
        tabBarIconStyle: {
          marginTop: 7,
        },
        tabBarActiveTintColor:"#157B63",
        tabBarInactiveTintColor:'#000'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="help-circle" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Announcement"
        component={AnnouncementSrc}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={31} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={33} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
