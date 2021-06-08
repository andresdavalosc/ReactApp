/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BluetoothList from './app/bluetooth/containers/bluetooth-list'
import PressurePlateMenu from './app/bluetooth/containers/PressurePlateMenu'
import bothfeetjump from './app/bluetooth/containers/bothfeetjump'
import leftfootjump from './app/bluetooth/containers/leftfootjump'
import rightfootjump from './app/bluetooth/containers/rightfootjump'

import Button from './app/bluetooth/components/button';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BluetoothList" component={BluetoothList} options={{ title: '' }}/>
        <Stack.Screen name="PressurePlateMenu" component={PressurePlateMenu} options={{ title: 'Menu' }}/>
        <Stack.Screen name="bothfeetjump" component={bothfeetjump} options={{ title: '' }}/>
        <Stack.Screen name="leftfootjump" component={leftfootjump} options={{ title: '' }} />
        <Stack.Screen name="rightfootjump" component={rightfootjump}  options={{ title: '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <BluetoothList/>
//   );
// };

export default MyStack;
