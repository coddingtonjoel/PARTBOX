import React, {Fragment} from 'react';
import Button from "@material-ui/core/Button";
import parts from "../../images/parts.png";
import "./Title.css"

const Title = () => {
    return (
        <Fragment>
            <section id="title">
                <div className="row">
                    <div className="col-lg-6 header-col">
                        <h1 className="page-head section-head">Monthly PC Parts Delivered Right to Your Doorstep.</h1>
                        <Button style={styles.login} className="login-btn" variant={"contained"}>Login</Button>
                        <Button style={styles.signup} variant={"contained"} className="signup-btn">Sign Up</Button>
                        <Button style={styles.parts} variant={"contained"} href="/recent" className={"parts-btn"}>View Recent Boxes</Button>
                    </div>
                    <div className="col-lg-6">
                        <img className="title-img" src={parts} alt={""}/>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

const styles = {
    login: {
        padding: "5px 20px",
        marginRight: "20px",
        background: "#333",
        color: "white",
        fontFamily: "Montserrat"
    },
    signup: {
        padding: "5px 20px",
        background: "#283E59",
        color: "white",
        fontFamily: "Montserrat"
    },
    parts: {
        padding: "5px 20px",
        marginLeft: "20px",
        background: "#ebbd6b",
        color: "black",
        fontFamily: "Montserrat"
    }
};

export default Title;