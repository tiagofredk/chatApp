import React from 'react'

export default function MembersLeftBar(user) {
    console.log(user.user.members);
    return (
        <div className='members-container'>
            <p>Members</p>
                <ul>
                    {user.user.members.map( item => {
                        console.log("members" + item)
                        return (
                        <p>{item.name}</p>
                        )
                    })}
                </ul>
        </div>
    )
}
