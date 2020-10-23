import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from '../constants/counter';

const initialState = {
  value: 690,
  data: null,
  isFetching: true
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    case FETCH_DATA_START:
      return { ...state, isFetching: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case FETCH_DATA_FAIL:
      return { ...state, isFetching: false, error: action.payload.error };
    default:
      return { ...state };
  }
};

export default counterReducer;
