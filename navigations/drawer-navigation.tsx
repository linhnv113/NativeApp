import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/settings';
import TabNavigation from './tab-navigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
