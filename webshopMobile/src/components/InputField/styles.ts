import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';

import {theme} from '@ui';

export const Styles = ScaledSheet.create({
  inputContainerStyle: {
    flex: 1,
    position: 'relative',
    width: '100%',
    marginVertical: verticalScale(theme.spacing.x1),
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: '12@s',
    color: theme.color.primaryText,
    marginLeft: verticalScale(theme.spacing.x1),
  },
  inputStyle: {
    borderWidth: '2@s',
    borderColor: theme.color.primaryBorder,
    borderRadius: scale(theme.radius.x1),
    padding: scale(theme.spacing.x2),
    fontSize: '13@s',
    backgroundColor: theme.color.primaryBackground,
    lineHeight: '15@s',
    minHeight: scale(theme.spacing.x8),
    marginVertical: verticalScale(theme.spacing.x05),
    letterSpacing: '0.5@s',
    textAlign: 'justify',
    textAlignVertical: 'top',
  },
  errorContainerStyle: {
    borderColor: theme.color.warning,
  },
  errorTextStyle: {
    position: 'absolute',
    color: theme.color.warning,
    fontSize: '10@s',
    lineHeight: '12@s',
    bottom: -verticalScale(theme.spacing.x1),
    left: verticalScale(theme.spacing.x1),
  },
});
