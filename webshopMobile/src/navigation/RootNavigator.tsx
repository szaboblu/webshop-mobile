import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from '@navigation';

export const RootNavigator = React.memo(() => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
});
