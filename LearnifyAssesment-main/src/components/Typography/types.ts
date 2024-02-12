import {StyleProp, TextProps, TextStyle} from 'react-native';
import {CustomDimentions, CustomTextProps} from '../types/types';

export interface TypographyProps
  extends TextProps,
    CustomTextProps,
    CustomDimentions {
  style?: StyleProp<TextStyle>;
  children?: JSX.Element | JSX.Element[] | string | any;
}
