import React, {Fragment} from 'react';
import "./CTA.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

const Cta = () => {
    return (
        <Fragment>
            <section id="cta" className="yellow-bg">
                <div className="container">
                    <h3 className="cta-head">Subscribe to the PARTBOX mailing list to get exclusive offers and
                        discounts!</h3>
                    <div>
                        <form method={"post"} className="form-group email-form">
                            <CssTextField type={"email"} style={styles.email} id="custom-css-standard-input" label="Email Address" />
                                <Button style={styles.button} variant={"contained"} className="btn-block email-button">Sign Up</Button>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

const CssTextField = withStyles({
    root: {
        fontFamily: "Montserrat",
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    },
})(TextField);

const styles = {
    email: {
        fontFamily: "Montserrat",
        marginBottom: "20px",
        width: "100%",
    },
    button: {
        fontFamily: "Montserrat",
        background: "#333",
        color: "#FFF"
    }
};
export default Cta;