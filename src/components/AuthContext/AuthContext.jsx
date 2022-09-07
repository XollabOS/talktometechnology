import React from "react";
import {get} from "mongoose";

export const AuthContext = React.createContext({
    currentUser: null
});

export function AuthWrapper(props) {
    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        async function getUserData() {
            const result = await (await fetch("/api/auth/currentUser")).json();
            setCurrentUser(result.user);
        }

        getUserData();
    }, []);

    const contextObject = {
        currentUser
    }

    return <AuthContext.Provider value={contextObject}>
        {props.children}
    </AuthContext.Provider>
}