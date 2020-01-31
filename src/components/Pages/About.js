import React from "react";
import "./About.css";
import Button from "@material-ui/core/Button";

const About = (props) => {
    return (
        <div className="about-container">
            <div className="container">
                <h1 className="about-head">About PARTBOX</h1>
                <p className="about-body">
                    PARTBOX was designed by Joel Coddington, a computer science
                    student at Biola University in La Mirada, CA. This website's
                    concept is based off the idea of Lootcrate, but geared
                    towards PC builders. The plan prices displayed on the front
                    page are definitely not suitable for the content they
                    include, but of course, this is just a mock concept for
                    frontend development.
                </p>
                <p className="about-body-foot">
                    *PARTBOX was created using React.js, Bootstrap, and
                    Material-UI.
                </p>
                <div className="github-button-container">
                    <Button style={styles.button} variant="contained">
                        <i className="fab fa-github"></i>
                        <a
                            className="github-link"
                            target="__blank"
                            rel="noopener noreferrer"
                            href="https://github.com/coddingtonjoel">
                            Joel's GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    button: {
        fontFamily: "Montserrat",
        background: "#333",
        color: "#FFF"
    }
};

export default About;
