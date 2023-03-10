import React from 'react'
import User from './User'
import { Context } from '../context/ContextProvider';
// import { v4 as uuidv4 } from 'uuid';
import ModalError from './ModalError';
// import { io } from 'socket.io-client';
import ProjectleftBar from './ProjectleftBar';
import DirectMessages from './DirectMessages';
import Channels from './Channels';
import ModalSearchBox from './modals/ModalSearchBox';

export default function Chat() {
    // const socket = io("http://localhost:5000");
    const {
        user,
        error,
        /* setError, */
        activeProject,
        /* setActiveProject, */
        messageArray,
        /* setMessageArray, */
        sendMessage,
        id,
        inputMessage
    } = React.useContext(Context);
    // const inputMessage = React.useRef("");

    /* const [messagesObj, setMessagesObj] = React.useState(
        {
            id: uuidv4(),
            channel: "string",
            text: inputMessage.current.value,
            user: {
                name: user.name,
                id: user.id
            },
            timestamp: new Date().toISOString()
        }
    ); */

    // automatic scroll function for messages
    React.useEffect(() => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [messageArray, id])

    return (
        <div className='chat-container'>
            {error && <ModalError message={error} />}
            <ModalSearchBox />
            <div className='chat-bars-box'>
                <div className='left-bar'>
                    <ProjectleftBar user={user} />
                    <div className='user-members-box'>
                        <User user={user} />
                        <Channels user={user} activeProject={activeProject} />
                        <DirectMessages user={user} activeProject={activeProject} />
                    </div>
                </div>
                <div className='right-bar'>
                    <div className='messages-box-container'>
                        {messageArray}
                    </div>
                    <div className='form-container'>
                        <form onSubmit={e => sendMessage(e, inputMessage)}>
                            <div className="form-box">
                                <textarea
                                    rows="20"
                                    cols="50"
                                    name="message"
                                    type="text"
                                    required
                                    className="form__input2"
                                    id="name"
                                    ref={inputMessage}
                                />
                                {/* <label className="form__label2" htmlFor="name">
                                <span className="form__name2">Message</span>
                            </label> */}
                            </div>
                            <div className="box_btn">
                                <button type="submit" className="box" id="btn" > &#62; </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
