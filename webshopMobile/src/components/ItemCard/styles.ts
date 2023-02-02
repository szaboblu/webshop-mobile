import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {theme} from '@ui';

export const Styles = ScaledSheet.create({
  cardContainerStyle: {
    flexDirection: 'column',
    borderWidth: '2@s',
    borderColor: theme.color.primaryBorder,
    borderRadius: theme.radius.x1,
    backgroundColor: theme.color.secondaryBackground,
    paddingHorizontal: verticalScale(theme.spacing.x4),
    paddingBottom: verticalScale(theme.spacing.x3),
    paddingTop: verticalScale(theme.spacing.x2),
    marginBottom: verticalScale(theme.spacing.x2),
  },
  mainTextStyle: {
    fontWeight: 'bold',
    fontSize: '24@s',
    lineHeight: '29@s',
    color: theme.color.primaryText,
    marginBottom: verticalScale(theme.spacing.x05),
  },
  separatorStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: '1@s',
    borderColor: theme.color.primaryBorder,
    marginVertical: verticalScale(theme.spacing.x05),
    width: '100%',
  },
  subTextStyle: {
    fontSize: '14@s',
    lineHeight: '17@s',
    marginTop: verticalScale(theme.spacing.x05),
  },
  subTextNameStyle: {
    fontWeight: 'bold',
  },
  bottomContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(theme.spacing.x2),
  },
  iconContainerStyle: {
    padding: scale(theme.spacing.x1),
  },
  textContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
