import React, { useState } from 'react'

function AddNotes({handleAddNote}) {
const [newNote, setNewNote] = useState("");
let charCount = 200;
const handleClick = () =>{
    if(newNote.trim().length > 0)
        handleAddNote(newNote);
    setNewNote("");
}
const handleChange = (e) =>{
    if(e.target.value.length <= 200)
        setNewNote(e.target.value)
}

  return (
    <div className='note new'>
        <textarea value={newNote} onChange={handleChange} rows={8} cols={12} placeholder='Enter...'></textarea>
        <div className='note-footer'>
            <small>{charCount - newNote.length} Remaining</small>
            <button className='save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNotes