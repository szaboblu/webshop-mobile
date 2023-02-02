import {scale, ScaledSheet} from 'react-native-size-matters';
import {theme} from '@ui';

export const Styles = ScaledSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: '2@s',
    borderColor: theme.color.primaryBorder,
    borderRadius: scale(theme.radius.x1),
    backgroundColor: theme.color.button,
    padding: scale(theme.spacing.x2),
    marginVertical: scale(theme.spacing.x2),
    paddingHorizontal: scale(theme.spacing.x8),
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: '14@s',
    lineHeight: '18@s',
    color: theme.color.buttonText,
    textAlign: 'center',
  },
  disabledStyle: {
    opacity: 0.3,
  },
});
