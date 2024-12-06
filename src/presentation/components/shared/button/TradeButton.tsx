import React from 'react';
import { type ButtonProps, Button, useTheme } from 'react-native-paper';

interface Props extends ButtonProps {
  variant: 'primary' | 'secondary';
}

export const TradeButton = ({variant, style, ...rest} : Props) => {
  const theme = useTheme();
  const color = variant === 'primary' ? theme.colors.primary : theme.colors.secondary;
  return (
    <Button {...rest} mode="contained" style={[style, {backgroundColor: color}]} />
  );
};

export default TradeButton;
