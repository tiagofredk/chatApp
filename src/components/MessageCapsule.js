// this react functional module receive msg prop
import React from 'react'

export default function MessageCapsule(prop) {
    console.log("Message Capsule Prop");
    console.log(prop)
    return (
        <div className='message-capsule' /* key={prop.msg.messageId} */ id={prop.msg.messageId}>
            <div className='message-avatar'>avatar</div>
            <div className='message-header'>
                <p>{prop.msg.user.name} </p>
            </div>
            <div>{prop.msg.timestamp}</div>
            <p>{prop.msg.text}</p>
            <div
                className='message-delete-btn'
                // onClick={() => deleteMessage(prop.msg.messageId)}
            >x</div>
        </div>
    )
}
