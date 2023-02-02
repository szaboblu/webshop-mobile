import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ItemCard} from '@components';
import {ScreenView} from '@ui';
import {RootState, deleteItem} from '@store';
import {Item} from '@types';
import {Root} from '@navigation';

export const ReadScreen = ({navigation}) => {
  console.log('props', navigation);
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.items);

  const handleOnDelete = (item: Item) => {
    dispatch(deleteItem(item));
  };

  const handleOnEdit = (item: Item) => {
    navigation.navigate(Root.CREATE, {item: item});
  };

  return (
    <ScreenView>
      {items.map(item => (
        <ItemCard
          key={item.id}
          infoItem={item}
          onEdit={() => handleOnEdit(item)}
          onDelete={() => handleOnDelete(item)}
        />
      ))}
    </ScreenView>
  );
};
