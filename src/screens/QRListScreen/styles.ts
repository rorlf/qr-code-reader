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
  header: {
    backgroundColor: colors.screenBackground
  },
  title: {
    textAlign: 'center',
    marginTop: spacing(4)
  },
  button: {
    margin: spacing(4),
    alignSelf: 'stretch'
  },
  noResults: {
    marginTop: spacing(3)
  },
  footer: {
    marginBottom: metrics.footer
  }
});
