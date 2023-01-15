import React from 'react'

export default function DirectMessages(prop) {
    
    return (
        <div className='members-container'>
            <p>Direct Messages</p>
                <ul>
                    {prop.user.directMessages.map( item => {
                        // console.log("members" + item)
                        return (
                        <p>{item.name}</p>
                        )
                    })}
                </ul>
        </div>
    )
}
