import React from 'react';
import { TextInput, TextInputProps, TextStyle } from 'react-native';
import colors from 'shared/styles/colors';
import styles from './styles';

interface Props extends TextInputProps {
  children?: React.ReactNode;
  style?: TextStyle;
}

const CustomTextInput = ({ children, style, ...textInputProps }: Props) => {
  return (
    <TextInput
      style={[styles.text, style]}
      autoCapitalize="none"
      placeholderTextColor={colors.placeholder}
      {...textInputProps}
    />
  );
};

export { CustomTextInput as TextInput };
