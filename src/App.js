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

function App() {
  return (
    <Router>
        <div className="container-fluid">
            <Navbar/>
        </div>
        <Switch>
            <Route exact path={"/"} render={props => (
                <Fragment>
                    <div className="container-fluid">
                        <Title/>
                    </div>
                    <Features/>
                    <Testamonials/>
                    <Pricing/>
                    <Cta/>
                </Fragment>
            )}/>
            <Route exact path={"/about"} component={About}/>
            <Route exact path={"/recent"} component={Parts}/>
            <Route exact path={"/checkout/standard"} render={props => (
                <Fragment>
                    <Checkout plan={"standard"} price={"$49.99"}/>
                </Fragment>
            )}/>
            <Route exact path={"/checkout/select"} render={props => (
                <Fragment>
                    <Checkout plan={"select"} price={"$79.99"}/>
                </Fragment>
            )}/>
            <Route exact path={"/checkout/amd"} render={props => (
                <Fragment>
                    <Checkout plan={"amd"} price={"$119.99"}/>
                </Fragment>
            )}/>
            <Route exact path={"/checkout/intel"} render={props => (
                <Fragment>
                    <Checkout plan={"intel"} price={"$129.99"}/>
                </Fragment>
            )}/>
        </Switch>

       {/*Footer*/}
        <footer id="footer" className="tan-bg">
            <span className="footer-head">© 2020 PARTBOX, Inc.</span>
            <Link className="footer-item" to="#">Terms</Link>
            <Link className="footer-item" to="#">Privacy</Link>
            <Link className="footer-item" to="#">Support</Link>
            <Link className="footer-item" to="/about">About</Link>
        </footer>
    </Router>
  );
};

export default App;
