import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';
import {CustomDimentions, CustomTextProps} from '../types/types';

export interface CustumTextInputProps
  extends TextInputProps,
    CustomDimentions,
    CustomTextProps {
  innerRef?: any;
  style?: StyleProp<TextStyle>;
}
