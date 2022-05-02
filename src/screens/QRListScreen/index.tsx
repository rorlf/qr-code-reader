import React, { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { Body, Button, SearchInput, Title } from 'shared/components';
import { deleteQrCode, useQrCode } from 'store/slices/qrCodeSlice';
import { QrItem } from './components';
import { QrItemProps } from './components/QrItem/types';
import { useDispatch } from 'store/hooks';
import { showMessage } from 'services';
import * as Clipboard from 'expo-clipboard';
import styles from './styles';

export const QRListScreen = () => {
  const dispatch = useDispatch();
  const { data } = useQrCode();
  const [searchKey, setSearchKey] = useState('');
  const qrCodesFormatted = useMemo(() => formatQrCodes(), [data]);
  const qrCodesFiltered = useMemo(
    () => filterQrCodes(),
    [qrCodesFormatted, searchKey]
  );
  const isEmpty = useMemo(() => data.length === 0, [data]);

  const { navigate } = useNavigation();

  function formatQrCodes(): QrItemProps[] {
    return data.map((qrCodeData, index) => ({
      qrCodeData,
      onPressCopy: () => onPressCopy(qrCodeData),
      onPressDelete: () => dispatch(deleteQrCode(index))
    }));
  }

  function filterQrCodes() {
    const searchKeyLowCase = searchKey.toLowerCase();
    return qrCodesFormatted.filter(qrItem =>
      qrItem.qrCodeData.toLowerCase().includes(searchKeyLowCase)
    );
  }

  function onSearch(searchKey) {
    setSearchKey(searchKey);
  }

  function onPressCopy(qrCodeData: string) {
    Clipboard.setString(qrCodeData);
    showMessage('Copied to clipboard.');
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
    () => (
      <View style={styles.header}>
        <Title style={styles.title}>QR Code List</Title>
        {!isEmpty && <SearchInput onSearch={onSearch} />}
      </View>
    ),
    [isEmpty]
  );
  const renderEmpty = useCallback(() => {
    if (isEmpty)
      return (
        <Button
          onPress={onPressScanQrCode}
          style={styles.button}
          label="Scan QR Code"
        />
      );

    return <Body style={styles.noResults}>No results</Body>;
  }, [isEmpty]);

  const renderFooter = useCallback(() => <View style={styles.footer} />, []);

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      style={styles.screen}
      data={qrCodesFiltered}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
    />
  );
};
