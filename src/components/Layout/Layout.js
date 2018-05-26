import React from 'react';
import ReactAux from '../../hoc/ReactAux';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => (
  <ReactAux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </ReactAux>
);

export default Layout;
