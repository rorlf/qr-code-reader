import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Body } from 'shared/components/typographies';
import { QrItemProps } from './types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from 'shared/styles/colors';
import styles from './styles';

export const QrItem = ({ qrCodeData, onPressCopy }: QrItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Body selectable>{qrCodeData}</Body>
      </View>
      <TouchableOpacity onPress={onPressCopy}>
        <MaterialCommunityIcons
          size={20}
          name="content-copy"
          color={colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};
