import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Body } from 'shared/components/typographies';
import { QrItemProps } from './types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { spacing } from 'shared/utils/styles';
import colors from 'shared/styles/colors';
import styles from './styles';

export const QrItem = ({
  qrCodeData,
  onPressCopy,
  onPressDelete
}: QrItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Body selectable>{qrCodeData}</Body>
      </View>
      <TouchableOpacity
        onPress={onPressDelete}
        hitSlop={{
          bottom: spacing(1),
          left: spacing(1),
          right: spacing(1),
          top: spacing(1)
        }}
      >
        <MaterialCommunityIcons
          size={20}
          name="trash-can-outline"
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.copyButton}
        onPress={onPressCopy}
        hitSlop={{
          bottom: spacing(1),
          left: spacing(1),
          right: spacing(1),
          top: spacing(1)
        }}
      >
        <MaterialCommunityIcons
          size={20}
          name="content-copy"
          color={colors.textPrimary}
        />
      </TouchableOpacity>
    </View>
  );
};
