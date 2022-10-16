import { useState } from 'react';
import './App.css';
import NotesLists from './components/NotesLists';
import {nanoid} from 'nanoid'
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([
    {
      text:"First text",
      date:'15/04/2022',
      id:nanoid()
    },{
      text:"Second text",
      date:'15/04/2022',
      id:nanoid()
    },{
      text:"Third text",
      date:'15/04/2022',
      id:nanoid()
    },
  ]);

  const addNote = (text) =>{
    const date = new Date();
    const newTask = {
      id:nanoid(),
      date:date.toLocaleDateString(),
      text:text
    }
    setNotes([...notes, newTask]);
  }

  const deleteNote = (id) =>{
    setNotes(notes.filter((note)=>note.id != id));
  }

  return (
    <div className="app">
      Notes
      <Search/>
      <NotesLists handleDelete = {deleteNote} handleAddNote = {addNote} data = {notes}/>
    </div>
  );
}

export default App;
