// In App.js in a new project

import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './src/navigation/AuthNavigator/AuthNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
