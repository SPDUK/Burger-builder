import React, { Component } from 'react';
import reactAux from '../../hoc/reactAux';

class BurgerBuilder extends Component {
  render() {
    return (
      <reactAux>
        <div>Burger</div>
        <div>Build Controls</div>
      </reactAux>
    );
  }
}

export default BurgerBuilder;
