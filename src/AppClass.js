import React, {Component} from 'react';
import BoxClass from "./component/BoxClass";

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

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            userresult: null,
            computerresult: null
        }
    }


    game = (userSelect) => {
        this.setState({userSelect: choices[userSelect]});
        let computerIndex = Math.floor(Math.random() * 3);
        let computerSelect = Object.keys(choices)[computerIndex];
        this.setState({computerSelect: choices[computerSelect]});

        if (userSelect && computerSelect) {
            if (userSelect === computerSelect) {
                this.setState({userresult: "Tie"});
                this.setState({computerresult: "Tie"});
            } else if (userSelect === "rock" && computerSelect === "scissor") {
                this.setState({userresult: "Win"});
                this.setState({computerresult: "Lose"});
            } else if (userSelect === "rock" && computerSelect === "paper") {
                this.setState({userresult: "Lose"});
                this.setState({computerresult: "Win"});
            } else if (userSelect === "scissor" && computerSelect === "rock") {
                this.setState({userresult: "Lose"});
                this.setState({computerresult: "Win"});
            } else if (userSelect === "scissor" && computerSelect === "paper") {
                this.setState({userresult: "Win"});
                this.setState({computerresult: "Lose"});
            } else if (userSelect === "paper" && computerSelect === "rock") {
                this.setState({userresult: "Win"});
                this.setState({computerresult: "Lose"});
            } else if (userSelect === "paper" && computerSelect === "scissor") {
                this.setState({userresult: "Lose"});
                this.setState({computerresult: "Win"});
            }
        }
    }
    render() {
        return (
            <div>
                <div className="box-container">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.userresult}/>
                    <h2>vs</h2>
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.computerresult}/>
                </div>
                <div className="button-container">
                    <button onClick={() => this.game("rock")}>rock</button>
                    <button onClick={() => this.game("scissor")}>scissor</button>
                    <button onClick={() => this.game("paper")}>paper</button>
                </div>
            </div>
        );
    }
}

