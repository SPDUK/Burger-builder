import React from 'react';
import reactAux from '../../hoc/reactAux';

import classes from './Layout.css';

const Layout = props => (
  <reactAux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </reactAux>
);

export default Layout;
