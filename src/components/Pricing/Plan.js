import React from 'react';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./Pricing.css";

const Plan = (props) => {
    const styles = {
        plan: {
            fontFamily: "Montserrat",
            background: "#333",
            color: "#FFF"
        },
        propStyle: {
            backgroundColor: (props.bkg),
            color: (props.color)
        }
    };

    return (
            <div key={props.plan} className="price-col col-xl-3 col-md-6 col-sm-12">
                <div className={"card bg-light"}>
                    <div style={styles.propStyle} className="card-header">
                        <h3 className="plan">{props.plan}</h3>
                        <h2 className="price">{props.price}</h2>
                    </div>
                    <div className="card-body">
                        {props.features}
                    </div>
                    <div className="card-footer">
                        <Button style={styles.plan}
                                variant={"contained"}
                                className={"btn-block"}
                                href={`/checkout/${props.button}`}>
                            Select Plan
                        </Button>
                    </div>
                </div>
            </div>

    );
};

Plan.propTypes = {
    plan: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bkg: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,

};

export default Plan;