import React, { Component } from 'react';
import classes from './Modal.css';

import ReactAux from '../../../hoc/ReactAux/ReactAux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log('updating..');
  }
  render() {
    return (
      <ReactAux>
        <Backdrop removeBackdrop={this.props.closeModal} show={this.props.show} />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </ReactAux>
    );
  }
}

export default Modal;
