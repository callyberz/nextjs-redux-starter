import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from '../constants/counter';

export function incrementCounter() {
  return async (dispatch) => {
    dispatch({
      type: INCREMENT_COUNTER,
    });
    return true;
  };
}

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

export function getFakeData() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_DATA_START,
    });

    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await request.json();

      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });

      console.log('fetched data successfully');
    } catch (error) {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: error,
      });
    }
  };
}
