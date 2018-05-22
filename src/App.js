import React, { Component } from 'react';
import './App.css';

import Person from './Person';

class App extends Component {
  constructor() {
    super();
    this.doSomething = this.doSomething.bind(this);
    this.state = {
      text: ['One', 'Two', 'Three', 'Four']
    };
  }

  doSomething() {
    const arr = this.state.text.map(this.addEnd);
    console.log(...arr);
  }
  addEnd = str => {
    const finished = `${str}..!!!!!`;
    return finished;
  };

  render() {
    return (
      <div className="App">
        <h1 onClick={this.doSomething}>hi</h1>
      </div>
    );
  }
}

export default App;
