import React, { Component } from 'react';
import Card from './cards/card'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      cardNumber:0,
      cardLimit: 10,
      1: Card[1],
      2: Card[2],
      3: Card[3],
      4: Card[4],
      5: Card[5],
      6: Card[6],
      7: Card[7],
      8: Card[8],
      9: Card[9],
      10: Card[10],
    };
  }
  render() {
    
    return (
      <div className="App">
      <br/>
      <button onClick={this.randomCard.bind(this)}>Losuj Fish/ke</button>
      <br/>
      <br/>
      <output>Text number: <br/>&nbsp; {this.state[this.state.cardNumber]}</output>
      <p>How its works? "onclick" generate number from 1 - {this.state.cardLimit}, <br/>
      passing this number to"this.state[this.state.cardNumber]",<br/>
      and render message on screen. </p>
      <br/>
      
      </div>
      
    );

  }
  randomCard(){
this.setState(
  {cardNumber: Math.floor((Math.random() * this.state.cardLimit)+ 1) }
)
  }
  
}

export default App;
