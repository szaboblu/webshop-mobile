import {COLORS} from './colors';

const colorTheme = {
  primaryBackground: COLORS.white,
  secondaryBackground: COLORS.lighterGrey,
  primaryText: COLORS.black,
  secondaryText: COLORS.darkGrey,
  surface: COLORS.white,
  navBar: COLORS.white,
  navBarBorder: COLORS.grey,
  navbarActiveBackground: COLORS.black,
  navbarInactiveBackground: COLORS.white,
  navbarActiveText: COLORS.white,
  navbarInactiveText: COLORS.black,
  button: COLORS.lightgrey,
  buttonText: COLORS.black,
  primaryBorder: COLORS.grey,
  secondaryBorder: COLORS.lighterGrey,
  warning: COLORS.warning,
};

export const theme = {
  color: colorTheme,
  spacing: {
    x05: 4,
    x1: 8,
    x2: 12,
    x3: 16,
    x4: 20,
    x5: 24,
    x6: 28,
    x7: 36,
    x8: 48,
    x9: 56,
    navBar: 86,
    tabHeader: 60,
  },
  radius: {
    x05: 6,
    x1: 12,
    x2: 18,
    x3: 32,
    x4: 44,
  },
};
