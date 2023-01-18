// This is a React functional component that renders a list of direct message 
// conversations for a user's active project. It uses the Context API to access 
// the messageArray state and the setMessageArray function for updating the displayed 
// messages. The component also has a function, loadMessages, which takes a parameter 
// of an array of messages and updates the messageArray state with a new array of JSX 
// elements, each representing a message with a text and a delete button. When a user 
// clicks on a conversation in the list, it calls the loadMessages function passing in 
// the messages of that conversation.
import React from 'react'
import { Context } from '../context/ContextProvider';
import MessageCapsule from './MessageCapsule';

export default function DirectMessages(prop) {
    const { setMessageArray, activeProject } = React.useContext(Context);
    
    const loadMessages = (param) => {
        setMessageArray([]);
        param.map((msg, i) => {
            setMessageArray(currentMessageArray => [...currentMessageArray,
                    <MessageCapsule msg={msg} />
                ]);
        })
    }

    return (
        <div className='members-container'>
            <p>Direct Messages</p>
            <ul>
                {prop.user.projects.map(project => {
                    if (project.name === activeProject) {
                        return project.directMessages.map((item, i) => {
                            return (
                                <li onClick={() => loadMessages(item.messages)} key={i}>{item.name}</li>
                            )
                        })
                    }
                    return undefined;
                })}
            </ul>
        </div>
    )
}
