import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Body } from 'shared/components/typographies';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  label: string;
}

export const Button = ({ label, style, ...touchableOpacityProps }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      {...touchableOpacityProps}
    >
      <Body style={styles.label}>{label}</Body>
    </TouchableOpacity>
  );
};
