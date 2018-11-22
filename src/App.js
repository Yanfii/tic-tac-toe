import React, { Component } from 'react';
import logo from './logo.svg';
import donut from './donut.svg';
import cinnamon from './cinnamon_sticks.svg'
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

  handleClick = (position) => {
    if(this.state.player && !this.state.winner) {
      var tempBoard = this.state.board
      if (!this.state.board[position]) {
        tempBoard[position] = this.state.player
        this.setState({
          board: tempBoard,
          player: this.state.player === 1 ? 2 : 1
        })
      }
      //check winner here
      this.findWinner()
    }
  }

  reset = () => {
    this.setState({
      board: Array(9).fill(null),
      player: 1,
      winner: null
    })
  }

  findWinner = () => {
    var winning = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]]
    for(var i = 0; i < winning.length; i++) {
      row = winning[i]
      var row = winning[i]
      var board = this.state.board
      if (board[row[0]] && board[row[0]] === board[row[1]] &&
         board[row[1]] === board[row[2]]) {
           this.setState({
             winner: board[row[0]]
           })
         }
    }
  }

  renderBoxes = () => {
    return this.state.board.map((square, index) =>
      <div
       className="square"
       onClick={() => this.handleClick(index)}>
         {square && <img src={square === 1? donut : cinnamon}/>}
      </div>)
  }

  render() {
    return (
      <div className="App">
      <h1>Tic Tac Toe</h1>
        {this.state.winner && <h1>Winner is {this.state.winner}</h1>}
        <button onClick={() => this.reset()}> Reset </button>
        <div className="board">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
