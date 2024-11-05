import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/auth';
import TodoListScreen from './screens/todo/todo-list';
import TodoDetailScreen from './screens/todo/todo-detail';
import ProfileScreen from './screens/profile';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TodoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      <Stack.Screen name="TodoDetail" component={TodoDetailScreen} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todo List" component={TodoStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={MainTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
