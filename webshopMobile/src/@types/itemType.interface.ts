import {Error} from './error';

export interface Item {
  id?: number;
  name: string;
  description: string;
  amount: number;
}

export interface ItemError {
  name: Error | string;
  description: Error | string;
  amount: Error | string;
}
