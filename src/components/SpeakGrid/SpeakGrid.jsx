import React from "react";
import * as api from "../../helpers/api";
import SpeakButton from "../SpeakButton/SpeakButton";

export default function SpeakGrid(props) {
    const [buttonConfiguration, setButtonConfiguration] = React.useState([]);
    React.useEffect(function () {
        api.getJSON("/api/main/configuration").then(result => setButtonConfiguration(result.data));
    }, []);
    if (!buttonConfiguration.length) {
        return <ul></ul>;
    } else {
        const buttons = buttonConfiguration.map((button) => {
            return <li key={button.id}>
                <SpeakButton {...button}></SpeakButton>
            </li>
        });
        console.log(new Set(buttonConfiguration.map(button => button.color)));
        return <ul>{buttons}</ul>;
    }
}