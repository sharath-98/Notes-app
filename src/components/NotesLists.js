import React from 'react'
import AddNotes from './AddNotes'
import Note from './Note'

function NotesLists({data, handleAddNote}) {
  return (
    <div className='notes-list'>
       {
        data?.map((note)=>(
        <Note key={note.id} noteText={note.text} noteDate={note.date}/>
       ))
       }
       <AddNotes handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesLists