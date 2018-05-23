import React, { Component } from 'react';
import reactAux from '../../hoc/reactAux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <reactAux>
        <Burger />
        <div>Build Controls</div>
      </reactAux>
    );
  }
}

export default BurgerBuilder;
