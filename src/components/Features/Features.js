import React, {Fragment} from 'react';
import "./Features.css";

const Features = () => {
    return (
        <Fragment>
            <div className="feature-container">
                <div className="container">
                    <section id="features">
                        <div className="row features-row">
                            <div className="col-lg-4">
                                <i className="fas fa-tools feature-icon"></i>
                                <h3 className="feat-head">High Quality Parts</h3>
                                <p>Industry standard PC parts allows for custom builds that run using top-notch
                                    hardware. </p>
                            </div>
                            <div className="col-lg-4">
                                <i className="fas fa-box feature-icon"></i>
                                <h3 className="feat-head">Variety Boxes</h3>
                                <p>Monthly PARTBOX packages contain a variety of PC parts to keep developers and ITs
                                    satisfied.</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="prime">
                                    <i className="fab fa-twitch feature-icon"></i>
                                    <i className="fas fa-exchange-alt"></i>
                                    <i className="fab fa-amazon feature-icon"></i>
                                </div>
                                <h3 className="feat-head">Discounted for Prime</h3>
                                <p>Members of Twitch Prime and Amazon Prime benefit from a 20% monthly discount.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
};

export default Features;