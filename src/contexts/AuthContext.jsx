import React from "react";

/**
 * An authorization context wrapper, containing the user information fetched from an API.
 *
 * @type {React.Context<{currentUser: null}>}
 */
export const AuthContext = React.createContext({
    currentUser: null
});

/**
 * Returns an authorization context wrapper.
 *
 * @param props.children You can put elements inside this wrapper.
 * @return {JSX.Element} An authorization context wrapper.
 * Inside this element, you can use AuthContext to get the data from the user's account.
 * @constructor
 */
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