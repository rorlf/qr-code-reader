import { StyleSheet } from 'react-native';
import colors from 'shared/styles/colors';
import { metrics } from 'shared/styles/metrics';
import { spacing } from 'shared/utils/styles';

export default StyleSheet.create({
  screen: {
    backgroundColor: colors.screenBackground,
    flex: 1,
    paddingHorizontal: metrics.screenPadding
  },
  title: {
    textAlign: 'center',
    marginTop: spacing(4)
  },
  button: {
    margin: spacing(4),
    alignSelf: 'stretch'
  },
  footer: {
    marginBottom: metrics.footer
  }
});
