import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state={
      cardNumber:0,
      cardLimit: 4,
      1: '1.Pierwszy tekst',
      2: '2.drugi tekst',
      3: '3.trzeci tekst',
      4: '4.czawrty tekst',
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
      <p>How its works? "onlick" generte number from 1 - {this.state.cardLimit}, <br/>
      passing this number to"this.state[this.state.cardNumber]",<br/>
      and render message on scren. </p>
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
