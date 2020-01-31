import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import parts from "../../images/parts.png";
import "./Title.css";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

const Title = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <section id="title">
                <div className="row">
                    <div className="col-lg-6 header-col">
                        <h1 className="page-head section-head">
                            Monthly PC Parts Delivered Right to Your Doorstep.
                        </h1>
                        <Button
                            onClick={handleClickOpen}
                            style={styles.login}
                            className="login-btn"
                            variant={"contained"}>
                            Login
                        </Button>
                        <Button
                            onClick={handleClickOpen}
                            style={styles.signup}
                            variant={"contained"}
                            className="signup-btn">
                            Sign Up
                        </Button>
                    </div>
                    <div className="col-lg-6">
                        <img className="title-img" src={parts} alt={""} />
                    </div>
                </div>
            </section>

            <Dialog
                className={"login-dialog"}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle className={"login-dialog"} id="form-dialog-title">
                    Sign in to PARTBOX
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        href={process.env.PUBLIC_URL + "/demo/end"}
                        color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
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
