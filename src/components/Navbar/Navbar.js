import React from 'react';
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <section id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Button style={styles.head} className="navbar-brand" href="/">PARTBOX <i className="fas fa-desktop"></i></Button>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Button style={styles.item} className={"nav-item"} href="/#pricing">Pricing</Button>
                            </li>
                            <li className="nav-item">
                                <Button style={styles.item} className="nav-link" href={"#"}>Contact</Button>
                            </li>
                            <li className="nav-item">
                                <Button style={styles.item} className="nav-link" href={"/about"}>About</Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    );
};

const styles = {
    head: {
        fontFamily: 'Ubuntu',
        fontSize: "22px",
        letterSpacing: "10px",
        background: "#004352",
        padding: "5px 15px 5px 25px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        transition: "0.2s",
        marginTop: "20px"
    },
    item: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        fontFamily: 'Montserrat'
    },
};

export default Navbar;