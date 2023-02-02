import {Error, ItemError, Item} from '@types';

export const validateForm = (form: Item, errors: ItemError) => {
  if (!form.name) {
    errors.name = 'Name' + Error.REQUIRED;
  } else {
    errors.name = '';
  }

  if (!form.description) {
    errors.description = 'Description' + Error.REQUIRED;
  } else {
    errors.description = '';
  }

  if (!form.amount) {
    errors.amount = 'Amount' + Error.REQUIRED;
  } else if (errors.amount !== Error.NOT_A_NUMBER) {
    errors.amount = '';
  }

  return errors;
};

export const hasError = (error: ItemError) => {
  return Object.values(error).some(err => err !== '');
};
