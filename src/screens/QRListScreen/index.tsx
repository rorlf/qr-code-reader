import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { Button, Text, Title } from 'shared/components';
import { useQrCode } from 'store/slices/qrCodeSlice';
import { QrItem } from './components';
import { QrItemProps } from './components/QrItem/types';
import * as Clipboard from 'expo-clipboard';
import styles from './styles';

export const QRListScreen = () => {
  const { data } = useQrCode();
  const qrCodesFormatted = useMemo(() => formatQrCodes(), [data]);
  const { navigate } = useNavigation();

  function formatQrCodes(): QrItemProps[] {
    return data.map(qrCodeData => ({
      qrCodeData,
      onPressCopy: () => Clipboard.setString(qrCodeData)
    }));
  }

  function onPressScanQrCode() {
    navigate('AppTabsNavigator', {
      screen: 'ReadQRScreen'
    });
  }

  const keyExtractor = useCallback(
    (item: QrItemProps, index: number) => index.toString(),
    []
  );
  const renderItem = useCallback(
    ({ item }: { item: QrItemProps }) => <QrItem {...item} />,
    []
  );
  const renderHeader = useCallback(
    () => <Title style={styles.title}>QR Code List</Title>,
    []
  );
  const renderEmpty = useCallback(
    () => (
      <Button
        onPress={onPressScanQrCode}
        style={styles.button}
        label="Scan QR Code"
      />
    ),
    []
  );
  const renderFooter = useCallback(() => <View style={styles.footer} />, []);

  return (
    <FlatList
      style={styles.screen}
      data={qrCodesFormatted}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
    />
  );
};
