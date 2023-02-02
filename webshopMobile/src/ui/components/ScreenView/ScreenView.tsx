import React from 'react';
import {
  View,
  StatusBar,
  StyleProp,
  ViewStyle,
  StatusBarStyle,
  KeyboardAvoidingView,
  Platform,
  Text,
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
      <SafeAreaView
        //behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        style={Styles.keyboardAvoidingStyle}>
        <ScrollView style={Styles.scrollViewStyle}>{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
});
