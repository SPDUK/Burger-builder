import React from 'react';

const drawerToggle = props => (
  <div
    onKeyDown={props.clicked}
    role="button"
    tabIndex="0"
    onClick={props.clicked}
  >
    MENU
  </div>
);

export default drawerToggle;
