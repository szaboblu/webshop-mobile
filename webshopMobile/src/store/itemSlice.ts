import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Item} from '../@types/itemType.interface';
import _ from 'lodash';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const items = [
  {
    id: 1,
    name: 'Item 1',
    description: loremIpsum,

    amount: 1,
  },
  {
    id: 2,
    name: 'Item 2',
    description: loremIpsum,
    amount: 2,
  },
];

const initialState: {items: Item[]} = {items: items};

const ItemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<Item>) {
      if (state.items.some(item => action.payload.id === item.id)) {
        state.items = _.map(
          state.items,
          (item: Item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          },
          [],
        );
        return;
      }

      const id = _.uniqueId('item_');
      state.items.push({...action.payload, id});
    },
    deleteItem(state, action: PayloadAction<Item>) {
      state.items = _.filter(
        state.items,
        (item: Item) => item.id !== action.payload.id,
        [],
      );
    },
  },
});

export const {setItem, deleteItem} = ItemSlice.actions;

export default ItemSlice.reducer;
