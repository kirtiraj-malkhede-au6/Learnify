import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../screens/Auth/LoginScreen';
import {OtpVerifyScreen} from '../../screens/Auth/OtpVerifyScreen';
import {AuthNavigatorProps, RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const AuthNavigator: React.FC<AuthNavigatorProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Log in"
      screenOptions={{
        headerTransparent: true,
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="Log in" component={LoginScreen} />
      <Stack.Screen name="OTP Verify" component={OtpVerifyScreen} />
    </Stack.Navigator>
  );
};
