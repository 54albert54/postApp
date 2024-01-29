import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { MyBottomTabs } from "./src/naviation";

import 'react-native-gesture-handler';
import { PostContextProvider } from "./src/provider/context";


export default function App() {
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);
    let textColor = ''

  
  return (
    <NavigationContainer>
      <PostContextProvider>
      <MyBottomTabs/>
      </PostContextProvider>

    </NavigationContainer>
  );
}


