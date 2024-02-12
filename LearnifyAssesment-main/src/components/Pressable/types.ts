import React from 'react';
import {PressableProps, StyleProp, ViewStyle} from 'react-native';

export interface CustomPressableProps extends PressableProps {
  activeOpacity?: number | undefined;
  // style?: StyleProp<ViewStyle> | ((pressed: boolean) => StyleProp<ViewStyle>);
  children?: React.ReactNode;
}

export type PressStateType = {
  pressed: any;
};
