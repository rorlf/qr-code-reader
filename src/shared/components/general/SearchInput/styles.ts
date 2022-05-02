import { StyleSheet } from 'react-native';
import colors from 'shared/styles/colors';
import { metrics } from 'shared/styles/metrics';
import { spacing } from 'shared/utils/styles';

export default StyleSheet.create({
  container: {
    padding: spacing(4),
    borderWidth: metrics.border,
    borderRadius: spacing(4),
    borderColor: colors.textPrimary,
    marginTop: spacing(4),
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInputContainer: {
    flex: 1
  }
});
