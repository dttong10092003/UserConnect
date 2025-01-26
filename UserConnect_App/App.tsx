import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// Import màn hình demo
import DemoScreen from './screen/demo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Demo">
        <Stack.Screen
          name="Demo"
          component={DemoScreen}
          options={{ title: 'Demo Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
