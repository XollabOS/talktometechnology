import React from "react";
import * as api from "../helpers/api";

export const ButtonConfigurationContext = React.createContext({
    buttonConfiguration: [],
    refreshConfiguration: undefined,
    insertNewButton: undefined,
    deleteExistingButton: undefined,
    editingMode: false,
    setEditingMode: undefined,
});

export function ButtonConfigurationWrapper(props) {
    const [buttonConfiguration, setButtonConfiguration] = React.useState(() => {
        // TODO: Waiting for CI, functionality temporarily disabled.
        // return JSON.parse(localStorage.getItem("configuration") ?? "[]");
        return [];
    });
    const [editingMode, setEditingMode] = React.useState(false);

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
            const result = await (await fetch("/api/configuration/button", {
                method: "POST",
                body: formData,
            })).json();
            if (result.success) {
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

    async function deleteExistingButton(buttonID) {
        try {
            await api.sendJSON("/api/configuration/button", {id: buttonID},{
                method: "DELETE",
            });
        } catch (e) {
            console.error(e);
        }
    }

    React.useEffect(refreshConfiguration, []);

    const contextObject = {
        buttonConfiguration,
        refreshConfiguration,
        addNewButton,
        deleteExistingButton,
        setEditingMode,
        editingMode
    };

    return <ButtonConfigurationContext.Provider value={contextObject}>
        {props.children}
    </ButtonConfigurationContext.Provider>;
}