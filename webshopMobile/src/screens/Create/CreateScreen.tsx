import React from 'react';
import {useDispatch} from 'react-redux';
import {ScreenView} from '@ui';
import {InputField, Form} from '@components';
import {useForm} from '@utils';
import {Item} from '@types';
import {setItem} from '@store';
import {Root} from '@navigation';

export const CreateScreen = ({route, navigation}) => {
  const item: Item = route.params?.item;
  const dispatch = useDispatch();
  const {formData, handleInputChange, handleSubmit, error} = useForm(
    item,
    onSubmit,
  );

  function onSubmit() {
    dispatch(setItem(formData));
    navigation.navigate(Root.READ);
  }

  return (
    <ScreenView>
      <Form title="Please fill in all inputs" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          value={formData.name}
          onChange={text => handleInputChange(text, 'name')}
          errorText={error.name}
          placeholder="Item name"
        />
        <InputField
          label="Description"
          value={formData.description}
          onChange={text => handleInputChange(text, 'description')}
          multiline
          errorText={error.description}
          placeholder="Item description "
        />
        <InputField
          label="Storage amount"
          onChange={text => handleInputChange(text, 'amount')}
          value={formData.amount.toString()}
          keyboardType="number-pad"
          errorText={error.amount}
          placeholder="The amount of stored items"
        />
      </Form>
    </ScreenView>
  );
};
