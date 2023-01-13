import React from 'react'

export default function User(prop) {
// console.log(user.user.name);
    return (
        <div className='user-container'>
            <p>User
                {prop.user.name}
            </p>
        </div>
    )
}
