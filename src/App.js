import React, {Fragment} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Features from "./components/Features/Features";
import Testamonials from "./components/Testamonials/Testamonials";
import Pricing from "./components/Pricing/Pricing";
import Cta from "./components/CTA/CTA";
import parts from "./images/parts.png";
import Button from "@material-ui/core/Button"

function App() {
  return (
    <Fragment>
        <div className="container-fluid">
            <Navbar/>
            <section id="title">
                {/*Title*/}
                <div className="row">
                    <div className="col-lg-6 header-col">
                        <h1 className="page-head section-head">Monthly PC Parts Delivered Right to Your Doorstep.</h1>
                        <Button style={styles.login} className="login-btn" variant={"contained"}>Login</Button>
                        <Button style={styles.signup} variant={"contained"} className="signup-btn">Sign Up</Button>
                    </div>
                    <div className="col-lg-6">
                        <img className="title-img" src={parts} alt={""}/>
                    </div>
                </div>
            </section>
        </div>
        <Features/>
        <Testamonials/>
        <Pricing/>
        <Cta/>
       {/*Footer*/}

        <footer id="footer" className="tan-bg">
            <span className="footer-head">© 2020 PARTBOX, Inc.</span>
            <a className="footer-item" href="#">Terms</a>
            <a className="footer-item" href="#">Privacy</a>
            <a className="footer-item" href="#">Support</a>
            <a className="footer-item" href="#">About</a>
        </footer>
    </Fragment>
  );
}

const styles = {
    login: {
        padding: "5px 20px",
        marginRight: "20px",
        background: "#333",
        color: "white"
    },
    signup: {
        padding: "5px 20px",
        background: "#283E59",
        color: "white"
    }
};

export default App;
