import { StyleSheet } from 'react-native';
import colors from 'shared/styles/colors';
import { metrics } from 'shared/styles/metrics';

export default StyleSheet.create({
  container: {
    height: metrics.button,
    borderWidth: metrics.border,
    borderRadius: metrics.button,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: colors.primary
  }
});
