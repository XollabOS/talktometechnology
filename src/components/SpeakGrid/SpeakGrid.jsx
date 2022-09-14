import React from "react";
import SpeakButton from "../SpeakButton/SpeakButton";
import classes from "./SpeakGrid.module.css";
import {ButtonConfigurationContext} from "../../contexts/ButtonConfigurationContext";

/**
 * Creates a grid of speech buttons.
 *
 * @returns {JSX.Element} The grids where speech buttons are loaded inside,
 * and an empty list if the data has not been loaded yet.
 * @constructor
 */
export default function SpeakGrid() {
    const {buttonConfiguration} = React.useContext(ButtonConfigurationContext);

    if (!buttonConfiguration.length) {
        return <section className={classes.btnGrid}></section>;
    } else {
        const buttons = buttonConfiguration.map((button, index) => {
            return <SpeakButton {...button} key={button._id || `__default__${index}`}></SpeakButton>
        });
        return <section className={classes.btnGrid}>{buttons}</section>;
    }
}