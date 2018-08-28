import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      cardNumber: 1234,
      cardLimit: 100
    };
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.randomCard.bind(this)}>Losuj Fish/ke</button>
      <br/>
      <output>{this.state.cardNumber}</output>
      </div>
    );
  }
  randomCard(){
this.setState(
  {cardNumber: Math.floor((Math.random() * this.state.cardLimit)+ 0) }
)
  }
}

export default App;
