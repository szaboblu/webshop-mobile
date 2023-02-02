import React from 'react';
import {Pressable, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScreenView} from '@ui';
import {deleteItem, setItem} from '../../store/itemSlice';
import {RootState} from '../../store/rootReducer';

export const CreateScreen = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.items);
  const item = {
    name: 'Item 1',
    description: 'Item 1 description',
    amount: 1,
  };
  return (
    <ScreenView>
      <Text>Create Screen</Text>
      {items.map(i => (
        <Pressable
          style={{width: '10%', height: '10%'}}
          onPress={() => dispatch(deleteItem(i))}>
          <Text>{i.name}</Text>
        </Pressable>
      ))}
      <Pressable
        style={{width: '10%', height: '10%'}}
        onPress={() => dispatch(setItem(item))}>
        <Text>Press Me</Text>
      </Pressable>
    </ScreenView>
  );
};
