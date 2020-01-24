import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Features from "./components/Features/Features";
import Testamonials from "./components/Testamonials/Testamonials";
import Pricing from "./components/Pricing/Pricing";
import Cta from "./components/CTA/CTA";
import Title from "./components/Title/Title";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from "./components/Pages/About";
import Parts from "./components/Pages/Parts";
import Checkout from "./components/Pages/Checkout";
import Demo from "./components/Pages/Demo";

function App() {
  return (
    <Router>
        <div className="container-fluid">
            <Navbar/>
        </div>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} render={props => (
                <Fragment>
                    <div className="container-fluid">
                        <Title/>
                    </div>
                    <Features/>
                    <Testamonials/>
                    <Pricing plans={plans}/>
                    <Cta/>
                </Fragment>
            )}/>
            <Route exact path={process.env.PUBLIC_URL + "/about"} component={About}/>
            <Route exact path={process.env.PUBLIC_URL + "/recent"} component={Parts}/>
            <Route exact path={process.env.PUBLIC_URL + "/checkout/standard"} render={props => (
                <Fragment>
                    <Checkout plan={plans[0]} price={"$49.99"}/>
                </Fragment>
            )}/>
            <Route exact path={process.env.PUBLIC_URL + "/checkout/select"} render={props => (
                <Fragment>
                    <Checkout plan={plans[1]} price={"$79.99"}/>
                </Fragment>
            )}/>
            <Route exact path={process.env.PUBLIC_URL + "/checkout/amd"} render={props => (
                <Fragment>
                    <Checkout plan={plans[2]} price={"$119.99"}/>
                </Fragment>
            )}/>
            <Route exact path={process.env.PUBLIC_URL + "/checkout/intel"} render={props => (
                <Fragment>
                    <Checkout plan={plans[3]} price={"$129.99"}/>
                </Fragment>
            )}/>
            <Route exact path={process.env.PUBLIC_URL + "/demo/end"} component={Demo}/>
        </Switch>

       {/*Footer*/}
        <footer id="footer" className="tan-bg">
            <span className="footer-head">© 2020 PARTBOX, Inc.</span>
            <Link className="footer-item" to="#">Terms</Link>
            <Link className="footer-item" to="#">Privacy</Link>
            <Link className="footer-item" to="#">Support</Link>
            <Link className="footer-item" to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </footer>
    </Router>
  );
}

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

export default App;
