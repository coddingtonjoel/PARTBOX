import React, {Fragment} from 'react';
import "./Pricing.css";
import Button from "@material-ui/core/Button";

const Pricing = () => {
    return (
        <Fragment>
            <section id="pricing" className="tan-bg">

                <div className="container">
                    <div>
                        <h2 className="pricing-title section-head">Plans directed towards interests.</h2>
                        <p className="pricing-subtitle">A monthly subscription geared towards every PC builder.</p>
                    </div>
                    <div className="row">
                        <div className="price-col col-xl-3 col-md-6 col-sm-12">
                            <div className="card bg-light">
                                <div className="card-header">
                                    <h3 className="plan">PARTBOX STANDARD</h3>
                                    <h2 className="price">$49.99 / mo.</h2>
                                </div>
                                <div className="card-body">
                                    <p>-a PSU (Power Supply Unit)</p>
                                    <p>-a PC fan</p>
                                    <p>-a PCIe item</p>
                                    <p>-an internal drive of varying size</p>
                                    <p>-Newegg coupons for randomly selected GPUs and CPUs</p>
                                </div>
                                <div className="card-footer">
                                    <Button style={styles.plan} variant={"contained"} className="btn-block">Select Plan</Button>
                                </div>
                            </div>
                        </div>
                        <div className="price-col col-xl-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3 className="plan">PARTBOX SELECT</h3>
                                    <h2 className="price">$79.99 / mo.</h2>
                                </div>
                                <div className="card-body">
                                    <p>-a mechanical keyboard</p>
                                    <p>-a 1920x1080 monitor</p>
                                    <p>-a selected external device</p>
                                    <p>-a PCIe item</p>
                                    <p>-Newegg coupons for randomly selected GPUs and CPUs</p>
                                </div>
                                <div className="card-footer">
                                    <Button style={styles.plan} variant={"contained"} className="btn-block">Select Plan</Button>
                                </div>
                            </div>
                        </div>
                        <div className="price-col col-xl-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header bg-primary intel-header text-white">
                                    <h3 className="plan">PARTBOX INTEL</h3>
                                    <h2 className="price">$129.99 / mo.</h2>
                                </div>
                                <div className="card-body">
                                    <p>-a PCIe item</p>
                                    <p>-Intel i3 9000s Series CPU or i5 8000s Series CPU</p>
                                    <p>-an internal drive of varying size</p>
                                    <p>-Newegg coupons for randomly selected GPUs</p>
                                </div>
                                <div className="card-footer">
                                    <Button style={styles.plan} variant={"contained"} className="btn-block">Select Plan</Button>
                                </div>
                            </div>
                        </div>
                        <div className="price-col col-xl-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header amd-header bg-danger text-white">
                                    <h3 className="plan">PARTBOX AMD</h3>
                                    <h2 className="price">$119.99 / mo.</h2>
                                </div>
                                <div className="card-body">
                                    <p>-a PCIe item</p>
                                    <p>-AMD Ryzen 7 CPU</p>
                                    <p>-an internal drive of varying size</p>
                                    <p>-Newegg coupons for randomly selected GPUs</p>
                                </div>
                                <div className="card-footer">
                                    <Button style={styles.plan} variant={"contained"} className={"btn-block"}>Select Plan</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

const styles = {
    plan: {
        fontFamily: "Montserrat",
        background: "#333",
        color: "#FFF"
    }
};

export default Pricing;