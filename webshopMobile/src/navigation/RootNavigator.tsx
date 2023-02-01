import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator, Root} from '@navigation';

export const RootNavigator = React.memo(() => {
  const initialRouteName = Root.CREATE;
  return (
    <NavigationContainer>
      <HomeNavigator initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
});
