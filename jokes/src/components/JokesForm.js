import React from "react";
import { connect } from "react-redux";

// ACTION CREATORS
import { getData } from "../actions";

// have a button to fetch data
const JokeForm = props => {
  // props has state values
  console.log(props);
  const handleChanges = e => {
    props.getData();
    e.preventDefault();
    // informs redux to send FETCH_DATA action to reducer
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>***FETCHING DATA***</div>
      ) : (
        <button onClick={handleChanges}>🤭 Click to LOL! 🤣 </button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  console.log("mSTP:", state);
  // first, catching to see if data is being fetched
  // jokes-state will be with JokesList
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(JokeForm);
