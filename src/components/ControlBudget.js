import React, { Fragment } from 'react';
import { checkBudget } from '../helpers';

const ControlBudget = ({budget, rest}) => (
    <Fragment>
        <div className = "alert alert-primary">
            budget: ${budget}
        </div>
        <div className = {checkBudget(budget, rest)}>
            Rest: ${rest}
        </div>
    </Fragment>
);
 
export default ControlBudget;