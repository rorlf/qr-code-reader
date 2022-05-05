import React from 'react';
import { TextInput, TextInputProps, TextStyle } from 'react-native';
import colors from 'shared/styles/colors';
import styles from './styles';

interface Props extends TextInputProps {
  style?: TextStyle;
  innerRef?: any;
}

const CustomTextInput = ({ style, innerRef, ...textInputProps }: Props) => {
  return (
    <TextInput
      ref={innerRef}
      style={[styles.text, style]}
      autoCapitalize="none"
      placeholderTextColor={colors.placeholder}
      {...textInputProps}
    />
  );
};

export { CustomTextInput as TextInput };
