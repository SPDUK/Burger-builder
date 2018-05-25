import React from 'react';
import classes from './Modal.css';

import ReactAux from '../../../hoc/ReactAux';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <ReactAux>
    <Backdrop removeBackdrop={props.closeModal} show={props.show} />
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </ReactAux>
);

export default modal;
