import {useState} from "react";
import React from 'react';
import './App.css';
import Box from './component/Box';

const choices = {
    rock:{
        name: "rock",
        img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
    },

    scissor:{
        name: "scissor",
        img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
    },

    paper:{
        name: "paper",
         img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    },



}

function App() {

    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [userresult, setUserResult] = useState(null);
    const [computerresult, setComputerResult] = useState(null);

    const game = (userSelect) => {
        setUserSelect(choices[userSelect]);
        let computerIndex = Math.floor(Math.random() * 3);
        let computerSelect = Object.keys(choices)[computerIndex];
        setComputerSelect(choices[computerSelect]);

        if (userSelect && computerSelect) {
            if (userSelect === computerSelect) {
                setUserResult("Tie");
                setComputerResult("Tie");
            } else if (userSelect === "rock" && computerSelect === "scissor") {
                setUserResult("Win");
                setComputerResult("Lose");
            } else if (userSelect === "rock" && computerSelect === "paper") {
                setUserResult("Lose");
                setComputerResult("Win");
            } else if (userSelect === "scissor" && computerSelect === "rock") {
                setUserResult("Lose");
                setComputerResult("Win");
            } else if (userSelect === "scissor" && computerSelect === "paper") {
                setUserResult("Win");
                setComputerResult("Lose");
            } else if (userSelect === "paper" && computerSelect === "rock") {
                setUserResult("Win");
                setComputerResult("Lose");
            } else if (userSelect === "paper" && computerSelect === "scissor") {
                setUserResult("Lose");
                setComputerResult("Win");
            }
        }
    }

  return (
      <div>
          <div className="box-container">
              <Box title="You" item={userSelect} result={userresult}/>
              <h2>vs</h2>
              <Box title="Computer" item={computerSelect} result={computerresult}/>
          </div>
          <div className="button-container">
              <button onClick={() => game("rock")}>rock</button>
              <button onClick={() => game("scissor")}>scissor</button>
              <button onClick={() => game("paper")}>paper</button>
          </div>
      </div>
  );
}

export default App;