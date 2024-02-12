import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {BlockProps} from './types';

export const Block: React.FC<BlockProps> = ({
  children,
  flex,
  direction,
  align,
  justify,
  color,
  p,
  pl,
  pt,
  pr,
  pb,
  ph,
  pv,
  m,
  ml,
  mt,
  mr,
  mb,
  mh,
  mv,
  br,
  bw,
  borderColor,
  width,
  height,
  center,
  boxshadow,
  style,
  ...props
}) => {
  const blockStyles: StyleProp<ViewStyle> = StyleSheet.flatten([
    flex !== undefined && {flex: flex},
    direction && {flexDirection: direction},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    p !== undefined && {padding: p},
    pl !== undefined && {paddingLeft: pl},
    pt !== undefined && {paddingTop: pt},
    pr !== undefined && {paddingRight: pr},
    pb !== undefined && {paddingBottom: pb},
    ph !== undefined && {paddingHorizontal: ph},
    pv !== undefined && {paddingVertical: pv},
    m !== undefined && {margin: m},
    ml !== undefined && {marginLeft: ml},
    mt !== undefined && {marginTop: mt},
    mr !== undefined && {marginRight: mr},
    mb !== undefined && {marginBottom: mb},
    mh !== undefined && {marginHorizontal: mh},
    mv !== undefined && {marginVertical: mv},
    br !== undefined && {borderRadius: br},
    bw !== undefined && {borderWidth: bw},
    width !== undefined && {width: width},
    height !== undefined && {height: height},
    borderColor !== undefined && {borderColor: borderColor},
    center && {alignItems: 'center', justifyContent: 'center'},
    style,
  ]);
  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};
