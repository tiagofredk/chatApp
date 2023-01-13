import React from 'react'

export default function MembersLeftBar(prop) {
    
    return (
        <div className='members-container'>
            <p>Members</p>
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
