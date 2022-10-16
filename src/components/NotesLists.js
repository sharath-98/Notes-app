import React from 'react'
import AddNotes from './AddNotes'
import Note from './Note'

function NotesLists({data, handleAddNote, handleDelete}) {
  return (
    <div className='notes-list'>
       {
        data?.map((note)=>(
        <Note key={note.id} id={note.id} handleDelete={handleDelete} noteText={note.text} noteDate={note.date}/>
       ))
       }
       <AddNotes handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NotesLists