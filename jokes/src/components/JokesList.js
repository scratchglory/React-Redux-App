import React from "react";
import { connect } from "react-redux";

const JokesList = props => {
  console.log("JokesList:", props);
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.jokes.map(joke => {
          return (
            //   console.log(joke);
            <div className="jokes-card">
              <p>#{joke.id}</p>
              <h4>{joke.setup}</h4>
              <p>"{joke.punchline}"</p>
              <p>Genre: {joke.type}</p>
            </div>
          );
        })
      )}
    </>
  );
};

const mapStateToProps = state => {
  console.log("JokesList mSTP:", state);
  return {
    jokes: state.jokes
  };
};
export default connect(mapStateToProps, {})(JokesList);

// export default JokesList;
