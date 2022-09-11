import {AuthContext} from "../../contexts/AuthContext";
import React from "react";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
    const contextData = React.useContext(AuthContext);
    const {currentUser} = contextData;

    if (!currentUser) {
        return <header className={classes.navbar}>
            <h1 className={classes.welcomeMessage}>Welcome to TalkToMe!</h1>
            <Link to={"/login"} className={classes.button}>Sign in</Link>
        </header>
    } else {
        return <header className={classes.navbar}>
            <img className={classes.profilePicture} src={currentUser["profilePicture"]} alt=""/>
            <h1 className={classes.welcomeMessage}>Welcome, {currentUser["name"]["givenName"]}!</h1>
            <Link className={`${classes.button} ${classes.squareButton}`} to="/addConfiguration"><i className="fa-solid fa-add"></i></Link>
            <a className={classes.button} href="/api/auth/logout">Sign out</a>
        </header>
    }

}