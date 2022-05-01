import React from 'react';
import { Text } from 'react-native';
import { CustomTextProps } from './types';
import styles from './styles';

const CustomText = ({ children, style, ...textProps }: CustomTextProps) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};

export { CustomText as Text };
