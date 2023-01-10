import React from 'react';

export const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [user, setUser] = React.useState("Random Name");
    return (
        <div>
            <Context.Provider value={
                {
                    user,
                    setUser,
                }
            }>
                {children}
            </Context.Provider>
        </div>
    )
}