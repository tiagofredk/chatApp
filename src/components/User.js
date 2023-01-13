import React from 'react'

export default function User(user) {
// console.log(user);
    return (
        <div className='user-container'>
            <p>
                {user.prop.name}
            </p>
        </div>
    )
}
