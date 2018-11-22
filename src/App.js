import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: 1,
      winner: null
    }
  }

  handleClick(position) {
    console.log(position)
    if(this.state.player && !this.state.winner) {
      let tempBoard = this.state.board
      if (!this.state.board[position]) {
        tempBoard[position] = this.state.player
        this.setState({
          board: tempBoard,
          player: this.state.player === 1 ? 2 : 1
        })
      }
      //check winner here
    }
  }

  renderBoxes() {
    return this.state.board.map((square, index) =>
      <div
       className="square"
       onClick={() => this.handleClick(index)}>
         {square}
      </div>)
  }

  render() {
    return (
      <div className="App">
      <h1>Tic Tac Toe</h1>
        <div className="board">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
