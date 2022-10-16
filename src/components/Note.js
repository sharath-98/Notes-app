import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note({noteText, noteDate}) {
  return (
    <div className='note'>
        <span>{noteText}</span>
        <div className='note-footer'>
            <small>{noteDate}</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>   
        </div>
    </div>
  )
}

export default Note