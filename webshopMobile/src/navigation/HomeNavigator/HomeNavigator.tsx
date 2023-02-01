import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CreateScreen, ReadScreen} from '@screens';
import {Root} from '@navigation';

const {Navigator, Screen} = createBottomTabNavigator();

export function HomeNavigator() {
  return (
    <Navigator>
      <Screen name={Root.CREATE} component={CreateScreen} />
      <Screen name={Root.READ} component={ReadScreen} />
    </Navigator>
  );
}
