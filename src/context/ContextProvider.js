import React from 'react';

export const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [error, setError] = React.useState(null);
    const [project, setProject] = React.useState(null); // State to reference wich project is active at the moment
    const [user, setUser] = React.useState({
        name: "User Name",
        id: "Id",
        directMessages: [{
            id: "contact1",
            name: "John Doe",
            messages: [
                {
                    messageId: 12345,
                    text: "Hey, how's it going?",
                    user: {
                        name: "Tiago",
                        id: "contact0"
                    },
                    timestamp: new Date().toISOString()
                },
                {
                    messageId: 123456,
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
                name: "Channel TK", 
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
            members: [{ userId: 1234556, name: "Atibiu" }]
        },
        {
            id: 12345,
            name: "AN", // project name
            ownerId: "Id",
            channels: [{
                id: "channel1", 
                name: "Channel AN", 
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
            members: [{ userId: 1234556, name: "Caroline" }]
        }],
    });

    return (
        <Context.Provider value={
            {
                user,
                setUser,
                error,
                setError,
                project,
                setProject
            }
        }>
            {children}
        </Context.Provider>
    )
}