import React, { useState } from 'react'

function AddNotes({handleAddNote}) {
const [newNote, setNewNote] = useState("");

const handleClick = () =>{
    handleAddNote(newNote);
}
  return (
    <div className='note new'>
        <textarea value={newNote} onChange={(e)=>setNewNote(e.target.value)} rows={8} cols={12} placeholder='Enter...'></textarea>
        <div className='note-footer'>
            <small>200 Remaining</small>
            <button className='save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNotes