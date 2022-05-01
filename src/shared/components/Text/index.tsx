import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import styles from './styles';

interface Props extends TextProps {
  children?: React.ReactNode;
  style?: TextStyle;
}

const CustomText = ({ children, style, ...textProps }: Props) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export { CustomText as Text };
