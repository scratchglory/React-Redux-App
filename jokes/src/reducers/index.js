// What do we want our code to reduce/catch?
// fetch_data, update_data, set_error
import { FETCH_DATA } from "../actions";

const initialState = {
  jokes: [],
  // tested for button true/false results
  isFetchingData: false,
  error: ""
};

// when the redux system passes action through reducer, it affects our state
export const jokesReducer = (state = initialState, action) => {
  console.log("REDUCER:", action.payload);
  switch (action.payload) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        jokes: []
      };

    case UPDATE_DATA:
      return {
        ...state,
        isFetchingData: false,
        jokes: action.payload
      };

    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
};
