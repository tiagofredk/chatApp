import React from 'react'

export default function User(prop) {

    return (
        <div className='user-container'>
            <p>
                {prop.user}
            </p>
        </div>
    )
}
