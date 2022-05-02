import React, { useEffect, useState } from 'react';
import {
  BarCodeEvent,
  BarCodeScanner,
  PermissionStatus,
  usePermissions
} from 'expo-barcode-scanner';
import { Linking, View } from 'react-native';
import { Button } from 'shared/components';
import { Title } from 'shared/components/typographies';
import { useDispatch } from 'store/hooks';
import { addQrCode } from 'store/slices/qrCodeSlice';
import styles from './styles';

export const ReadQRScreen = () => {
  const [permissionResponse, requestPermission, getPermission] =
    usePermissions();
  const [qrCodeData, setQrCodeData] = useState<string>();
  const [isLink, setIsLink] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    verifyIsLink();
  }, [qrCodeData]);

  function onBarCodeScanned({ data }: BarCodeEvent) {
    dispatch(addQrCode(data));
    setQrCodeData(data);
  }

  async function onPressQrCodeData() {
    qrCodeData && Linking.openURL(qrCodeData);
  }

  async function verifyIsLink() {
    let isLink = false;
    if (qrCodeData) {
      isLink = await Linking.canOpenURL(qrCodeData);
    }
    setIsLink(isLink);
  }

  function newScan() {
    setQrCodeData(undefined);
  }

  if (qrCodeData)
    return (
      <View style={styles.screen}>
        <View style={styles.qrCodeDataContainer}>
          <Title
            style={isLink && styles.qrCodeDataLink}
            onPress={onPressQrCodeData}
            selectable
          >
            {qrCodeData}
          </Title>
          <Button style={styles.button} onPress={newScan} label="New scan" />
        </View>
      </View>
    );

  if (permissionResponse?.status === PermissionStatus.GRANTED) {
    return (
      <View style={styles.screen}>
        <Title style={styles.title}>Scan QR Code</Title>
        <BarCodeScanner
          style={styles.barCodeScanner}
          onBarCodeScanned={onBarCodeScanned}
        />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.noCameraAccessContainer}>
        <Title>No access to camera</Title>
        <Button
          onPress={requestPermission}
          style={styles.button}
          label="Request Permission"
        />
      </View>
    </View>
  );
};
