import React from 'react'

export default function ProjectleftBar(prop) {
    
    return (
        <div className='project-icon-container'>
            <div className='project-icon'>
                {prop.user.projects.map(item => {
                    // console.log(item);
                    return <p>{item.name}</p>
                })}            
            </div>
        </div>
    )
}
