import React, {useCallback} from 'react';
import {Pressable as RNPressable} from 'react-native';
import {CustomPressableProps, PressStateType} from './types';

export const Pressable: React.FC<CustomPressableProps> = ({
  activeOpacity = 0.5,
  children,
  style,
  ...otherProps
}) => {
  const _style = useCallback(
    ({pressed}: PressStateType) => [
      {opacity: pressed ? activeOpacity : 1},
      typeof style === 'function' ? style(pressed) : style,
    ],
    [style, activeOpacity],
  );

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
};
