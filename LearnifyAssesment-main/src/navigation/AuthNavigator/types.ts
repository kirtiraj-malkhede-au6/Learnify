import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  ['Log in']: undefined; // Add your props here
  ['OTP Verify']: {
    phoneNumber: string;
  };
};
export interface AuthNavigatorProps {}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type RouteProps = RouteProp<RootStackParamList>;

export type PageProps<T extends keyof RootStackParamList> = {
  navigation: NavigationProps;
  route: RouteProps;
};
