import React from 'react';
import {
  TextInput,
  StyleProp,
  ViewStyle,
  KeyboardType,
  View,
  Text,
} from 'react-native';
import {theme} from '@ui';
import {Styles} from './styles';

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  keyboardType?: KeyboardType;
  multiline?: boolean;
  autoFocus?: boolean;
  onChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  errorText?: string;
}

/**
 * Input field component.
 *
 * @param label - The label of the input.
 * @param value - The value of the input.
 * @param placeholder - The placeholder text.
 * @param keyboardType - Determines which keyboard to open (e.g. numeric).
 * @param multiline - If 'true', the input will be multiline.
 * @param autoFocus - If 'true', the input will be focused on mount.
 * @param onChange - A function which will be called when the value changed.
 * @param style - The custom style of the component.
 * @param errorText - Error text that appears when the input is invalid.
 */
export const InputField = React.memo<InputFieldProps>(props => {
  const {
    label,
    value,
    placeholder,
    keyboardType,
    multiline,
    autoFocus,
    onChange,
    style,
    errorText,
  } = props;

  return (
    <View style={Styles.inputContainerStyle}>
      <Text style={Styles.labelStyle}> {label}</Text>
      <TextInput
        value={value}
        multiline={multiline}
        placeholder={placeholder}
        placeholderTextColor={theme.color.secondaryText}
        allowFontScaling={true}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        style={[
          Styles.inputStyle,
          style,
          errorText ? Styles.errorContainerStyle : null,
        ]}
        onChangeText={onChange}
      />
      {errorText && <Text style={Styles.errorTextStyle}>{errorText}</Text>}
    </View>
  );
});
