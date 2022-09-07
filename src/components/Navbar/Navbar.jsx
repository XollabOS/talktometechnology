import {AuthContext} from "../AuthContext/AuthContext";
import React from "react";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
    const contextData = React.useContext(AuthContext);
    const {currentUser} = contextData;

    console.log(currentUser);
    if (!currentUser) {
        return <div className={classes.navbar}>
            <h1>Welcome to TalkToMe!</h1>
            <Link to={"/login"} className={classes.authButton}>Sign in</Link>
        </div>
    } else {
        return <div className={classes.navbar}>
            <h1>Welcome, {currentUser.name.givenName}!</h1>
            <a className={classes.authButton} href="/api/auth/logout">Sign out</a>
        </div>
    }

}