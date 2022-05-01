import React from 'react';
import { Text } from 'shared/components/core/Text';
import { CustomTextProps } from 'shared/components/core/Text/types';
import styles from './styles';

export const Title = ({ children, style, ...textProps }: CustomTextProps) => {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {children}
    </Text>
  );
};
