import React from "react";

import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { MyBottomTabs } from "./src/naviation";


export default function App() {
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);
    let textColor = ''

  
  return (
    <NavigationContainer>
      {/* <DrawerNavigation/> */}
      <MyBottomTabs/>
      {/* <MyStack/> */}
    </NavigationContainer>
  );
}


