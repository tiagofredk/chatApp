import React from 'react'

export default function DirectMessages(prop) {

    return (
        <div className='members-container'>
            <p>Direct Messages</p>
            <ul>
                {prop.user.projects.map(project => {
                    if (project.name === prop.activeProject) {
                        return project.directMessages.map((item, i) => {
                            return (
                                <li key={i}>{item.name}</li>
                            )
                        })
                    }
                    return undefined;
                })}
            </ul>
        </div>
    )
}
