import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note({id, noteText, noteDate, handleDelete}) {
 const handleDeleteNote = () =>{
  handleDelete(id);
 }
  return (
    <div className='note'>
        <span>{noteText}</span>
        <div className='note-footer'>
            <small>{noteDate}</small>
            <MdDeleteForever onClick={handleDeleteNote} className='delete-icon' size='1.3em'/>   
        </div>
    </div>
  )
}

export default Note