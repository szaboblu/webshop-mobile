import {scale, ScaledSheet} from 'react-native-size-matters';

import {theme} from '@ui';

export const Styles = ScaledSheet.create({
  formStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: '2@s',
    borderColor: theme.color.primaryBorder,
    borderRadius: scale(theme.radius.x1),
    backgroundColor: theme.color.secondaryBackground,
    padding: scale(theme.spacing.x2),
    shadowColor: theme.color.primaryBorder,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: '16@s',
    left: scale(theme.spacing.x1),
  },
});
