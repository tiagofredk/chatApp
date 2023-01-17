import React from 'react';

export const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [error, setError] = React.useState(null);
    const [activeProject, setActiveProject] = React.useState("TK"); // State to reference wich project is active at the moment
    const [messageArray, setMessageArray] = React.useState([]); // array of html message elements
    const [user, setUser] = React.useState({
        name: "Tiago",
        id: "5dc1ff2d-1d20-439d-adef-247df0a39a52",
        activeProject: "TK", // active project to load at chat page
        projects: [
            {
                id: "12345",
                name: "TK", // project name
                ownerId: "5dc1ff2d-1d20-439d-adef-247df0a39a52",
                channels: [
                    {
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
                    }
                ],
                members: [{ userId: 1234556, name: "Atibiu" }],
                directMessages: [
                    {
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
                    }
                ],
            },
            {
                id: "123456",
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
                members: [{ userId: 1234556, name: "Caroline" }],
                directMessages: []
            }
        ],
    });

    return (
        <Context.Provider value={
            {
                user,
                setUser,
                error,
                setError,
                activeProject,
                setActiveProject,
                messageArray, 
                setMessageArray
            }
        }>
            {children}
        </Context.Provider>
    )
}