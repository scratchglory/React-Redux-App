import React from "react";
import "./App.css";

import JokesForm from "./components/JokesForm";
import JokesList from "./components/JokesList";
function App() {
  return (
    <div className="App">
      <h1>Laugh @ 1000's of Jokes</h1>
      <JokesForm />
      <div className="jokes-list">
        <JokesList />
      </div>
    </div>
  );
}

export default App;
