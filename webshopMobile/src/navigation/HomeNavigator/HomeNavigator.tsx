/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CreateScreen, ReadScreen} from '@screens';
import {Route} from '@react-navigation/native';
import {Root} from '@navigation';
import {theme} from '@ui';
import {Styles} from './styles';

const {Navigator, Screen} = createBottomTabNavigator();

interface HomeNavigatorProps {
  initialRouteName?: Root;
}

export const HomeNavigator = React.memo<HomeNavigatorProps>(
  ({initialRouteName = Root.CREATE}) => {
    const icon = {
      [Root.CREATE]: 'edit',
      [Root.READ]: 'list',
    };

    const screenOptionsCallback = ({
      route,
    }: {
      route: Route<string, object | undefined>;
    }): BottomTabNavigationOptions => {
      return {
        tabBarIcon: ({focused}): React.ReactNode => {
          const backgroundColor = focused
            ? theme.color.navbarActiveBackground
            : theme.color.navbarInactiveBackground;
          const iconColor = focused
            ? theme.color.navbarActiveText
            : theme.color.navbarInactiveText;
          const size = scale(25);

          return (
            <View style={[Styles.tabBarIconContainerStyle, {backgroundColor}]}>
              <Icon name={icon[route.name]} color={iconColor} size={size} />
            </View>
          );
        },
        tabBarLabel: () => null,
        tabBarStyle: Styles.tabBarStyle,
        tabBarItemStyle: Styles.tabItemStyle,
        tabBarHideOnKeyboard: true,
      };
    };

    return (
      <Navigator
        initialRouteName={initialRouteName}
        screenOptions={screenOptionsCallback}>
        <Screen
          name={Root.CREATE}
          component={CreateScreen}
          options={{title: 'Create Item'}}
        />
        <Screen
          name={Root.READ}
          component={ReadScreen}
          options={{title: 'Listed Items'}}
        />
      </Navigator>
    );
  },
);
