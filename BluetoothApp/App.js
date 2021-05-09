/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BluetoothList from './app/bluetooth/containers/bluetooth-list'
import PlayRoom from './app/bluetooth/containers/playroom'
import Button from './app/bluetooth/components/button';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BluetoothList"
          component={BluetoothList}
          options={{ title: '' }}
        />
        <Stack.Screen name="PlayRoom" component={PlayRoom} />
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
