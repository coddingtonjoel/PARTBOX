import React, {Fragment} from 'react';
import "./Pricing.css";
import Plan from "./Plan";

const Pricing = (props) => {

    return (
        <Fragment>
            <section id="pricing" className="tan-bg">
                <div className="container">
                    <div>
                        <h2 className="pricing-title section-head">Plans directed towards interests.</h2>
                        <p className="pricing-subtitle">A monthly subscription geared towards every PC builder.</p>
                    </div>
                    <div className="row">
                        {props.plans.map(plan =>
                            <Plan plan={plan.plan}
                                  price={plan.price}
                                  bkg={plan.bkg}
                                  color={plan.color}
                                  key={plan.key}
                                  button={plan.key}
                                  features={plan.features.map(feature =>
                                  <p key={feature}>{feature}</p>)}/>

                        )}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Pricing;