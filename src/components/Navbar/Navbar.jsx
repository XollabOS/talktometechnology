import {AuthContext} from "../../contexts/AuthContext";
import React from "react";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
import {ButtonConfigurationContext} from "../../contexts/ButtonConfigurationContext";

export default function Navbar() {
    const authContextData = React.useContext(AuthContext);
    const buttonConfigurationContextData = React.useContext(ButtonConfigurationContext);
    const {currentUser} = authContextData;

    if (!currentUser) {
        return <header className={classes.navbar}>
            <h1 className={classes.welcomeMessage}>Welcome to TalkToMe!</h1>
            <Link to={"/login"} className={classes.button}>Sign in</Link>
        </header>
    } else {
        let editButton;

        if (buttonConfigurationContextData.editingMode) {
            editButton = <button className={`${classes.button} ${classes.squareButton} ${classes.cancelButton}`}
                                 onClick={() => buttonConfigurationContextData.setEditingMode(false)}>
                <i className="fa-solid fa-xmark"></i>
            </button>;
        } else {
            editButton = <button className={`${classes.button} ${classes.squareButton}`}
                                 onClick={() => buttonConfigurationContextData.setEditingMode(true)}>
                <i className="fa-solid fa-pencil"></i>
            </button>;
        }

        return <header className={classes.navbar}>
            <img className={classes.profilePicture} src={currentUser["profilePicture"]} alt=""/>
            <h1 className={classes.welcomeMessage}>Welcome, {currentUser["name"]["givenName"]}!</h1>
            {editButton}
            <Link className={`${classes.button} ${classes.squareButton}`} to="/addConfiguration"><i className="fa-solid fa-add"></i></Link>
            <a className={classes.button} href="/api/auth/logout">Sign out</a>
        </header>
    }

}