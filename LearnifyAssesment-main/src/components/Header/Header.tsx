import React from 'react';
import {Block} from '../Block';
import {Typography} from '../Typography';

export const Header: React.FC<any> = ({title}) => {
  return (
    <Block center mt={20}>
      <Typography textSize={18} weight="600" color="#000">
        {title}
      </Typography>
    </Block>
  );
};
