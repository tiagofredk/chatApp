import React from 'react';

export const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [error, setError] = React.useState(null);
    const [user, setUser] = React.useState({
        name: "User Name",
        id: "Id",
        directMessages: [{
            id: "contact1",
            name: "John Doe",
            messages: [
                {
                    id: 12345,
                    text: "Hey, how's it going?",
                    user: {
                        name: "User1",
                        id: "user1"
                    },
                    timestamp: new Date().toISOString()
                },
                {
                    id: 123456,
                    text: "Not bad, thanks for asking.",
                    user: {
                        name: "John Doe",
                        id: "contact1"
                    },
                    timestamp: new Date().toISOString()
                }
            ]
        },
        {
            id: "contact2",
            name: "Jane Smith",
            messages: []
        }],
        projects: [{
            id: 12345,
            name: "TK", // project name
            ownerId: "Id",
            channels: [{
                id: "channel1", 
                name: "Channel 1", 
                messages: [
                    {
                        id: 12345,
                        text: "Hello world!",
                        user: {
                            name: "User1",
                            id: "user1"
                        },
                        timestamp: new Date().toISOString()
                    },
                    {
                        id: 23456,
                        text: "Welcome to the channel!",
                        user: {
                            name: "User2",
                            id: "user2"
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            }],
            members: [{ userId: 1234556, name: "member Name" }]
        }],
    });

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