import {scale, ScaledSheet} from 'react-native-size-matters';
import {theme} from '@ui';

const borderWidth = '2@s';

export const Styles = ScaledSheet.create({
  tabBarStyle: {
    borderWidth,
    borderTopWidth: borderWidth,
    position: 'absolute',
    elevation: 1,
    backgroundColor: theme.color.navBar,
    borderRadius: scale(theme.radius.x3),
    margin: scale(theme.spacing.x2),
    height: scale(theme.spacing.tabHeader),
    borderColor: theme.color.navBarBorder,
    borderTopColor: theme.color.navBarBorder,
    padding: scale(theme.spacing.x05),
    bottom: scale(theme.spacing.x1),
  },
  tabItemStyle: {
    height: '45@s',
  },
  tabBarIconContainerStyle: {
    padding: scale(theme.spacing.x1),
    borderRadius: scale(theme.radius.x4),
  },
});
