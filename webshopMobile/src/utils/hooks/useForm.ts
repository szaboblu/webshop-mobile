import {useState} from 'react';
import {Item, Error, ItemError} from '@types';
import {hasError, validateForm} from '@utils';

const initialItem: Item = {
  name: '',
  description: '',
  amount: 0,
};

const initialError: ItemError = {
  name: '',
  description: '',
  amount: '',
};

export const useForm = (
  initialState: Item = initialItem,
  onSubmit?: (data: Item) => void,
) => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(initialError);

  const handleInputChange = (value: string, name: string) => {
    if (name === 'amount') {
      if (isNaN(Number(value))) {
        setError({...error, [name]: Error.NOT_A_NUMBER});
        return;
      } else {
        setFormData({...formData, [name]: Number(value)});
        setError({...error, [name]: ''});
        return;
      }
    }
    if (value) {
      setError({...error, [name]: ''});
    }
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    const errors = validateForm(formData, error);
    if (hasError(errors)) {
      setError({...errors});
    }

    if (onSubmit) {
      onSubmit?.(formData);
    }
  };

  return {formData, handleInputChange, handleSubmit, error};
};
