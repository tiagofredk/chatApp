import React from 'react'

export default function Channels(prop) {
    return (
        <div className='channels-container'>
            <div className='channel'>
                <p>Channels</p>
                {prop.user.projects.map(item => {
                    // console.log(item.Channels);
                    return (
                        item.channels.map(item => {
                            return <p>#{item.name}</p>
                        })
                    )
                })}
            </div>
        </div>
    )
}
