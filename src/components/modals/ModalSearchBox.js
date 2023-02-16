import React from 'react'

export default function ModalSearchBox() {

  const search = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='search-box-container'>
      <form action="" onSubmit={(e) => search(e)}>
        <input type="text" required value="Search Contacts Messages Channels" />
      </form>
      <div className='modal-element-box'>
        <p>I'm looking for...</p>
        <ul>
          <li>Messages</li>
          <li>Files</li>
          <li># Channels</li>
          <li>People</li>
        </ul>
      </div>
    </div>
  )
}
