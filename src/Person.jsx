import React, { Component } from 'react';

export default class Person extends Component {
  render() {
    return (
      <div>
        <h2>My name is {this.props.name}</h2>{' '}
        <h4>I am {this.props.age} years old </h4>
        <h4>_________________________</h4>
      </div>
    );
  }
}
