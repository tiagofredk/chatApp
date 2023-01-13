import React from 'react'
import User from './User'
import { Context } from '../context/ContextProvider';
import { v4 as uuidv4 } from 'uuid';
import ModalError from './ModalError';
// import { io } from 'socket.io-client';
import ProjectleftBar from './ProjectleftBar';
import MembersLeftBar from './MembersLeftBar';
import Channels from './Channels';

export default function Chat() {
    // const socket = io("http://localhost:5000");
    const { user, error, setError } = React.useContext(Context);
    const inputMessage = React.useRef("");
    const [messageArray, setMessageArray] = React.useState([]);
    const [id, setId] = React.useState(null);
    const [messagesObj, setMessagesObj] = React.useState(
        {
            id: uuidv4(),
            text: inputMessage.current.value,
            user: {
                name: user.name,
                id: user.id
            },
            timestamp: Date.now()
        }
    );

    // delete message
    const deleteMessage = (id) => {
        setMessageArray(prevState => prevState.filter(message => message.key !== id));
    }

    // send message
    const sendMessage = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setId(id);
        setMessageArray([
            ...messageArray,
            <div className='message-box' key={id} id={id}>
                <p>{inputMessage.current.value}</p>
                <div className='message-delete-btn' onClick={() => deleteMessage(id)}>x</div>
            </div>
        ]);
        inputMessage.current.value = "";
    };

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
            <div className='left-bar'>
                <ProjectleftBar />
                <div className='user-members-box'>
                    <User user={user} />
                    <Channels user={user} />
                    <MembersLeftBar user={user} />
                </div>
            </div>
            <div className='right-bar'>
                <div className='messages-box-container'>
                    {messageArray}
                </div>
                <div className='form-box' id='inputuser'>
                    <form onSubmit={e => sendMessage(e)}>
                        <div className="form">
                            <input
                                name="message"
                                type="text"
                                required
                                className="form__input"
                                id="name"
                                ref={inputMessage}
                            />
                            <label className="form__label" htmlFor="name">
                                <span className="form__name">Message</span>
                            </label>
                        </div>
                        <div className="box_btn">
                            <button type="submit" className="box" id="btn" >Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
