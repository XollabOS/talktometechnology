import React from "react";
import * as api from "../helpers/api";

export const ButtonConfigurationContext = React.createContext({
    buttonConfiguration: [],
    refreshConfiguration: undefined,
    insertNewButton: undefined,
});

export function ButtonConfigurationWrapper(props) {
    const [buttonConfiguration, setButtonConfiguration] = React.useState(() => {
        return JSON.parse(localStorage.getItem("configuration") ?? "[]");
    });

    function refreshConfiguration() {
        api.getJSON("/api/configuration").then(result => {
            const newConfig = result.data;
            setButtonConfiguration(newConfig);
            localStorage.setItem("configuration", JSON.stringify(newConfig));
        });
    }

    async function addNewButton(newButtonInfo) {
        try {
            const formData = new FormData();
            for (let [key, val] of Object.entries(newButtonInfo)) {
                formData.append(key, val);
            }
            const data = await (await fetch("/api/configuration/button", {
                method: "POST",
                body: formData,
            })).json();
            if (data.success) {
                refreshConfiguration();
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    React.useEffect(refreshConfiguration, []);

    const contextObject = {
        buttonConfiguration,
        refreshConfiguration,
        addNewButton,
    };

    return <ButtonConfigurationContext.Provider value={contextObject}>
        {props.children}
    </ButtonConfigurationContext.Provider>;
}