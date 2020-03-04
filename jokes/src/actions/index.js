import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";
// inform redux to send getData action to reducer

export const getData = () => dispatch => {
  //   return {
  //     type: FETCH_DATA
  //   };

  dispatch({ type: FETCH_DATA });
  axios
    .get("https://official-joke-api.appspot.com/random_ten")
    .then(res => {
      console.log("Action:", res);
      dispatch({ type: UPDATE_DATA, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR:", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};
