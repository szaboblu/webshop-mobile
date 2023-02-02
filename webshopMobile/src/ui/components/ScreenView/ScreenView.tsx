import React from 'react';
import {
  View,
  StatusBar,
  StyleProp,
  ViewStyle,
  StatusBarStyle,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {Styles} from './styles';

interface ScreenViewProps {
  barStyleType?: StatusBarStyle;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const ScreenView = React.memo<ScreenViewProps>(props => {
  const {barStyleType = 'dark-content', children, style} = props;

  return (
    <View style={[Styles.containerStyle, style]}>
      <StatusBar
        barStyle={barStyleType}
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={Styles.keyboardAvoidingStyle}>
        <ScrollView style={Styles.scrollViewStyle}>{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
});
