import {View, Text} from 'react-native';
import React from 'react';
import {RoundButtonProps} from './types';
import {Pressable} from '../Pressable';
import {Block} from '../Block';
import {Typography} from '../Typography';

export const RoundButton: React.FC<RoundButtonProps> = ({title, onPress}) => {
  return (
    <Pressable onPress={onPress} style={{marginVertical: 20, width: '100%'}}>
      <Block br={42} center pv={12} color={'orangered'}>
        <Typography weight="600" textSize={18} color="#fff">
          {title}
        </Typography>
      </Block>
    </Pressable>
  );
};
