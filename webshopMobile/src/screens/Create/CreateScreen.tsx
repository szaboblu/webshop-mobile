import React from 'react';
import {ScreenView} from '@ui';
import {InputField, Form} from '@components';
import {useForm} from '@utils';

export const CreateScreen = () => {
  const {formData, handleInputChange, handleSubmit, error} = useForm();
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
