import React from 'react';

import burgerLogo from '../../assets/images/127 burger-logo.png';
import classes from './Logo.css';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Builder Logo" />
  </div>
);

export default Logo;
