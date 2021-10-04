import { INCREMENT, DECREMENT } from '../types';

export const incrementAction = () => (dispach) => {
  dispach({ type: INCREMENT });
};

export const decrementAction = () => (dispach) => {
  dispach({ type: DECREMENT });
};
