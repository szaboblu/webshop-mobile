import React from 'react';
import {Text, Pressable, View, StyleProp, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import {theme} from '@ui';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Styles} from './styles';
import {Item} from '@types';

export interface ItemCardProps {
  infoItem: Item;
  onDelete?: () => void;
  onEdit?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const ItemCard = React.memo<ItemCardProps>(props => {
  const {infoItem, onEdit, onDelete, style} = props;
  const IconsSize = scale(20);

  return (
    <View style={[Styles.cardContainerStyle, style]}>
      <Text style={Styles.mainTextStyle}>{`${infoItem.name}`}</Text>
      <View style={Styles.separatorStyle} />
      <Text style={Styles.subTextNameStyle}>Description: </Text>
      <Text style={Styles.subTextStyle}>{infoItem.description}</Text>

      <View style={Styles.bottomContainerStyle}>
        <Pressable style={Styles.iconContainerStyle} onPress={onEdit}>
          <Icon name="edit" color={theme.color.primaryText} size={IconsSize} />
        </Pressable>
        <View style={Styles.textContainerStyle}>
          <Text style={Styles.subTextNameStyle}>Amount: </Text>
          <Text style={Styles.subTextStyle}>{infoItem.amount}</Text>
        </View>
        <Pressable style={Styles.iconContainerStyle} onPress={onDelete}>
          <Icon
            name="delete"
            color={theme.color.primaryText}
            size={IconsSize}
          />
        </Pressable>
      </View>
    </View>
  );
});
