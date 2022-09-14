import classes from "./GoogleSignIn.module.css";
import React from "react";

/**
 * @returns {JSX.Element} A button that allows the user to sign in to Google.
 * @constructor
 */
export default function GoogleSignIn() {
    return <a className={`btn btn-block blue ${classes.signInButton}`} href={"/api/auth/google"}>
        <i className="fa-brands fa-google"></i>Sign in with Google
    </a>;
}
