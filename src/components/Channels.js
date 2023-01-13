import React from 'react'

export default function Channels(user) {
    console.log(user.user.channels)
    return (
        <div className='channels-container'>
            <div className='channel'>
                <p>Channels</p>
                {user.user.channels.map(item => {
                    return <p>{item.name}</p>
                })}
            </div>
        </div>
    )
}
