import {FlexAlignType, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {CustomDimentions, CustomViewProps} from '../types/types';

export interface BlockProps
  extends ViewProps,
    CustomViewProps,
    CustomDimentions {
  color?: string | undefined;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | string | any;
}
