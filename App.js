import * as React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}