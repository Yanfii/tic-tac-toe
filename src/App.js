import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  handleClick = (position) => {
    console.log("clicked in position ", position)
  }

  render() {
    const squares = this.state.board.map(square => <div className="square" onClick={this.handleClick}>{square}</div>)
    return (
      <div className="App">
      <h1>Tic Tac Toe</h1>
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}

export default App;
