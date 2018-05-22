import React, { Component } from 'react';
import './App.css';

import Person from './Person';

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderHelloWorld: true,
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Billy', age: 38 },
        { name: 'Jimmy', age: 14 }
      ]
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
        {this.state.persons.map(person => (
          <Person name={person.name} age={person.age} />
        ))}

        {this.state.renderHelloWorld ? <div>Hello World!!</div> : null}
        <h1 onClick={this.toggleHello}>test</h1>
      </div>
    );
  }
}

export default App;
