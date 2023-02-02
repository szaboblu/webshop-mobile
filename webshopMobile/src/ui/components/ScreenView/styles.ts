import {StyleSheet} from 'react-native';
import {theme} from '@ui';

export const Styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: theme.color.surface,
  },
  keyboardAvoidingStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: theme.spacing.x4,
  },
});
