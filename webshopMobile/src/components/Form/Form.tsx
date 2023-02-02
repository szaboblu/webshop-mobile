import React from 'react';
import {StyleProp, ViewStyle, View, Text} from 'react-native';
import {Button} from '@components';
import {Styles} from './styles';

interface FormProps {
  title: string;
  onSubmit: () => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

/**
 * Form  component.
 *
 * @param title - The title of the section.
 * @param onSubmit - A function what will be called when the form was submitted.
 * @param style - The custom style.
 * @param children - Components that will be rendered inside the section.
 */
export const Form = React.memo<FormProps>(props => {
  const {title, onSubmit, style, children} = props;

  return (
    <View style={[Styles.formStyle, style]}>
      <Text style={Styles.titleStyle}>{title}</Text>
      {children}
      <Button label="List Item" onPress={onSubmit} />
    </View>
  );
});
