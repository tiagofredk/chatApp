import React from 'react'

export default function Channels(prop) {
    // console.log(prop.user.projects);
    // console.log(prop.activeProject);
    console.log(prop);
    return (
        <div className='channels-container'>
            <div className='channel'>
                <p>Channels</p>
                {prop.user.projects.map(item => {
                    // console.log(item.Channels);
                    if (item.name === prop.activeProject){
                        return (
                            item.channels.map(item => {
                                return <p>#{item.name}</p>
                            })
                        )
                    }
                    return undefined;
                })}
            </div>
        </div>
    )
}
