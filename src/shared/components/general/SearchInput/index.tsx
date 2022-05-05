import React, { useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput as CustomTextInput } from 'shared/components/core';
import { useDebounce } from 'shared/hooks';
import colors from 'shared/styles/colors';
import styles from './styles';

interface Props {
  placeholder?: string;
  onSearch: (searchKey: string) => void;
  debounceTime?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export const SearchInput = ({
  placeholder = 'Search',
  onSearch,
  debounceTime = 500,
  style,
  testID
}: Props) => {
  const [searchKey, setSearchKey] = useState('');
  const searchKeyDebouced = useDebounce(searchKey, debounceTime);
  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    onSearch(searchKeyDebouced);
  }, [searchKeyDebouced]);

  function onPressInput() {
    textInputRef.current?.focus();
  }

  return (
    <TouchableWithoutFeedback onPress={onPressInput}>
      <View style={[styles.container, style]}>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            innerRef={textInputRef}
            returnKeyType="search"
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder={placeholder}
            testID={testID}
          />
        </View>
        <MaterialIcons name="search" color={colors.textPrimary} size={25} />
      </View>
    </TouchableWithoutFeedback>
  );
};
