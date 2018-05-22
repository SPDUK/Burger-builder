import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderHelloWorld: true
    };
  }

  toggleHello = () => {
    this.setState(prevState => ({
      renderHelloWorld: !prevState.renderHelloWorld
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.renderHelloWorld ? <div>Hello World!!</div> : null}
        <h1 onClick={this.toggleHello}>test</h1>
      </div>
    );
  }
}

export default App;
