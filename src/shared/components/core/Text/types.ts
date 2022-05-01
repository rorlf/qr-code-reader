import { StyleProp, TextProps, TextStyle } from 'react-native';

export interface CustomTextProps extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}
