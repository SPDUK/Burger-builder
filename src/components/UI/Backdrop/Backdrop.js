import React from 'react';
import classes from './Backdrop.css';

const backdrop = props =>
  props.show ? (
    <div
      onKeyDown={props.removeBackdrop}
      onClick={props.removeBackdrop}
      role="button"
      tabIndex="-1"
      className={classes.Backdrop}
    />
  ) : null;

export default backdrop;
