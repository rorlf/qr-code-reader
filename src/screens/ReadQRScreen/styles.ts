import { StyleSheet } from 'react-native';
import colors from 'shared/styles/colors';
import { metrics } from 'shared/styles/metrics';
import { spacing } from 'shared/utils/styles';

export default StyleSheet.create({
  screen: {
    backgroundColor: colors.screenBackground,
    flex: 1
  },
  qrCodeDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.screenPadding
  },
  qrCodeDataLink: {
    color: colors.link
  },
  newScan: {
    marginTop: spacing(3)
  },
  title: {
    textAlign: 'center',
    marginTop: spacing(4)
  },
  barCodeScanner: {
    flex: 1,
    marginVertical: spacing(4)
  },
  noCameraAccessContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: spacing(6),
    alignSelf: 'stretch'
  }
});
