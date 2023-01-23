import React from 'react'
import { Context } from '../context/ContextProvider';

export default function ProjectleftBar(prop) {
    const {setActiveProject } = React.useContext(Context);
    return (
        <div className='project-icon-container'>
            <div className='project-icon'>
                {prop.user.projects.map((item, i) => {
                    // console.log(item);
                    return <p key={i} onClick={() => setActiveProject(item.name)}>{item.name}</p>
                })}            
            </div>
        </div>
    )
}
