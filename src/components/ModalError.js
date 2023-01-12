import React from 'react'

export default function ModalError(error) {
    return (
        <div style={{
            widht: "200px",
            height: "50px"
            }} 
            className='modal-error-container'>
            <p>{error.message}</p>
        </div>
    )
}
