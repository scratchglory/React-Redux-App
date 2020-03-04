export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";
// inform redux to send getData action to reducer

export const getData = () => {
  return {
    type: FETCH_DATA
  };
};
