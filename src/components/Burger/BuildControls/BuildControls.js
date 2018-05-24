import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];
const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        // adding the ctrl.type into ingredientAdded function
        ingredientAdded={() => props.ingredientAdded(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
      />
    ))}
    <button disabled={!props.purchaseable} className={classes.OrderButton}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;