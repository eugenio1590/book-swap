import React from 'react';
import { type ButtonProps, Button, useTheme } from 'react-native-paper';

interface Props extends ButtonProps {
  variant: 'primary' | 'secondary';
}

export const StyledButton = ({variant, style, ...rest} : Props) => {
  const theme = useTheme();
  const backgroundColor = variant === 'primary' ? theme.colors.primary : theme.colors.secondary;
  return <Button {...rest} mode="contained" style={[style, {backgroundColor}]} />;
};

export default StyledButton;
