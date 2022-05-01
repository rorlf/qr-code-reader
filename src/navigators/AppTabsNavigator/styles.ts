import { StyleSheet } from 'react-native';
import { metrics } from 'shared/styles/metrics';
import { spacing } from 'shared/utils/styles';
import colors from 'shared/styles/colors';

export default StyleSheet.create({
  tabBar: {
    backgroundColor: colors.navigationBar,
    height: metrics.navigationBar,
    paddingBottom: spacing(1),
    borderTopWidth: metrics.border
  }
});
