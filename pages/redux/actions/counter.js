import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants/counter';

//Action Creator
export function incrementCounter() {
  return async dispatch => {
    dispatch({
      type: INCREMENT_COUNTER
    });

    return true;
  };
}

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});
