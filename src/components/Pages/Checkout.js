import React from 'react';

const date = require('date-and-time');
const now = new Date();
const next_month = date.addMonths(now, 1);

const Checkout = (props) => {
    return (
        <div>
            <p className={"checkout-head"}>PARTBOX {props.plan.toString().toUpperCase()} SUBSCRIPTION</p>
            <p>A transaction of {props.price} will be made after completing your purchase.</p>
            <p>You will be billed monthly starting on {next_month.toLocaleDateString()}.</p>
            <p>Following your transaction, you will sign in to complete your order.</p>
        </div>
    )
};

export default Checkout;