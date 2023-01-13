import React from 'react';

export const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [user, setUser] = React.useState("Username");
    const [error, setError] = React.useState(null);
    return (
        <Context.Provider value={
            {
                user,
                setUser,
                error,
                setError
            }
        }>
            {children}
        </Context.Provider>
    )
}