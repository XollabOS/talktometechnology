import React from "react";
import * as api from "../../helpers/api";
import SpeakButton from "../SpeakButton/SpeakButton";
import classes from "./SpeakGrid.module.css";

/**
 * Creates a grid of speech buttons.
 *
 * @returns {JSX.Element} The grids where speech buttons are loaded inside,
 * and an empty list if the data has not been loaded yet.
 * @constructor
 */
export default function SpeakGrid() {
    const [buttonConfiguration, setButtonConfiguration] = React.useState(() => {
        return JSON.parse(localStorage.getItem("configuration") ?? "[]");
    });

    React.useEffect(function () {
        console.log("Speak board reactivated.");
        api.getJSON("/api/configuration").then(result => {
            const newConfig = result.data;
            setButtonConfiguration(newConfig);
            localStorage.setItem("configuration", JSON.stringify(newConfig));
        });
    }, []);

    if (!buttonConfiguration.length) {
        return <ul className={classes.btnGrid}></ul>;
    } else {
        const buttons = buttonConfiguration.map((button) => {
            return <li key={button.id}>
                <SpeakButton {...button}></SpeakButton>
            </li>
        });
        return <ul className={classes.btnGrid}>{buttons}</ul>;
    }
}