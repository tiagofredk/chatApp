import React from 'react'
import User from './User'
import { Context } from '../context/ContextProvider';

export default function Chat() {
    const {user, setUser}  = React.useContext(Context);
    const inputMessage = React.useRef("");
    const [messageArray, setMessageArray] = React.useState([]);
    // const [messagesObj, setMessagesObj] = React.useState(
    //     {
    //         user:"",
    //         id:null,
    //         message:"",
    //         messageReadStatus: false,
    //     }
    // );

    const sendMessage = (e) => {
        e.preventDefault();
        setMessageArray([...messageArray, <p>{inputMessage.current.value}</p>]);
        inputMessage.current.value = "";
    }
    return (
        <div className='chat-container'>
            <div className='left-bar'>
                <User prop={user} />
            </div>
            <div className='right-bar'>
                <div className='messages-box'>
                    {messageArray}
                </div>
                <div id='inputuser'>
                    <form onSubmit={e => sendMessage(e)}>
                        <div className="form">
                            <input
                                name="message"
                                type="text"
                                className="form__input"
                                id="name"
                                autoComplete="off"
                                required
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
