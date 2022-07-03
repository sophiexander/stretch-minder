import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

var urlgif: string = "http://d205bpvrqc9yn1.cloudfront.net/1403.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getAllExercises}>hi</button>
        <img src={urlgif}></img>
      </header>
    </div>
  );
}

async function getAllExercises() {
  var key: string = process.env.REACT_APP_KEY!;
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      //urlgif = response.data[1].gifUrl;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export default App;
