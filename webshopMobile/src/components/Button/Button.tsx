import React from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {Styles} from './styles';

interface TextButtonProps {
  label: string | React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

/**
 * Button component.
 *
 * @param label - The label text or custom icon component.
 * @param onPress - A function what will be called when the component was pressed.
 * @param style - Custom style of the component's container.
 * @param disabled - If 'true', the component will be disabled.
 */
export const Button = React.memo<TextButtonProps>(props => {
  const {label, onPress, style, disabled} = props;

  return (
    <Pressable
      style={[Styles.containerStyle, disabled && Styles.disabledStyle, style]}
      disabled={disabled}
      onPress={(): void => onPress()}>
      <Text style={[Styles.textStyle]}>{label}</Text>
    </Pressable>
  );
});
