import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/home';
import Bookmark from '../screens/bookmark';
import Profile from '../screens/profile';
import { type RootTabParamList } from '../types';
import TodoStack from '../screens/todo';

const Tab = createBottomTabNavigator<RootTabParamList>();

const HomeIcon = ({ color, size }) => (
  <Icon name="home" color={color} size={size} />
);

const BookmarkIcon = ({ color, size }) => (
  <Icon name="book" color={color} size={size} />
);

const TodoIcon = ({ color, size }) => (
  <Icon name="bars" color={color} size={size} />
);

const ProfileIcon = ({ color, size }) => (
  <Icon name="user" color={color} size={size} />
);

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{ tabBarIcon: BookmarkIcon }}
      />
      <Tab.Screen
        name="Todo"
        component={TodoStack}
        options={{ tabBarIcon: TodoIcon }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: ProfileIcon }}
      />
    </Tab.Navigator>
  );
}
