import React, {Fragment} from 'react';
import "./Pricing.css";
import Plan from "./Plan";

const plans = [
    {
        plan: "PARTBOX STANDARD",
        price: "$49.99 / mo.",
        features: [
            "-a PSU (Power Supply Unit)",
            "-a PC fan\n-a PCIe item",
            "-an internal drive of varying size",
            "-Newegg coupons for randomly selected GPUs and CPUs",
            ],
        bkg: "#eceeef",
        color: "#000",
        key: "standard"
    },
    {
        plan: "PARTBOX SELECT",
        price: "$79.99 / mo.",
        features: [
            "-a mechanical keyboard",
            "-a 1920x1080 monitor",
            "-a selected external device",
            "-a PCIe item",
            "-Newegg coupons for randomly selected GPUs and CPUs"
            ],
        bkg: "#5a626a",
        color: "#fff",
        key: "select"
    },
    {
        plan: "PARTBOX AMD",
        price: "$119.99 / mo.",
        features: [
            "-a PCIe item",
            "-AMD Ryzen 7 CPU",
            "-an internal drive of varying size",
            "-Newegg coupons for randomly selected GPUs"
            ],
        bkg: "#cb3737",
        color: "#fff",
        key: "amd"
    },
    {
        plan: "PARTBOX INTEL",
        price: "$129.99 / mo.",
        features: [
            "-a PCIe item",
            "-Intel i3 9000s Series CPU or i5 8000s Series CPU",
            "-an internal drive of varying size",
            "-Newegg coupons for randomly selected GPUs"
        ],
        bkg: "#0071c5",
        color: "#fff",
        key: "intel"
    }
];

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
                        {plans.map(plan =>
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