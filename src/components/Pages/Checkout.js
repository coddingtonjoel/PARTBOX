import React from 'react';
import "./Checkout.css"
import {Button} from "@material-ui/core";

const date = require('date-and-time');
const now = new Date();
const next_month = date.addMonths(now, 1);
const us = require('us')

const Checkout = (props) => {
    return (
        <div className="checkout-container">
            <div className={"container"}>
                <div className="checkout-head">
                 <p>PARTBOX {props.plan.key.toString().toUpperCase()} SUBSCRIPTION x1</p>
                </div>
                <p>A transaction of {props.price} will be made after checking out.</p>
                <p>You will be billed monthly starting on <strong>{next_month.toLocaleDateString()}</strong>.</p>
                <p>Following your transaction, you will receive an email confirmation and receipt.</p>
                <hr className={"divider"}/>
            </div>
            <div className="container billing-form">
                <h5>Shipping Information</h5>
                <input type={"text"} className={"form-control first-name"} placeholder={"First Name"}/>
                <input type={"text"} className={"form-control last-name"} placeholder={"Last Name"}/>
                <input type={"text"} className={"form-control address-name"} placeholder={"Street Address"}/>
                <input type={"text"} className={"form-control etc-name"} placeholder={"Apt #, Floor, etc. (Optional)"}/>
                <input type={"text"} className={"form-control city-name"} placeholder={"City"}/>
                <div className="state-name form-group">
                    <select className="form-control" id="sel1">
                        {us.STATES.map(state =>
                            <option>{state.abbr}</option>
                        )}
                    </select>
                </div>
                <input type={"text"} className={"form-control zipcode"} placeholder={"Zipcode"}/>
                <Button className={"continue-button"} href="/demo/end" style={styles.button} variant={"contained"}>Continue to Payment Method</Button>
            </div>
        </div>
    )
};

const styles = {
    button: {
        fontFamily: "Montserrat",
        background: "#333",
        color: "#FFF"
    }
};

export default Checkout;