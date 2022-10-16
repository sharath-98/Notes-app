import { useState } from 'react';
import './App.css';
import NotesLists from './components/NotesLists';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="app">
      Notes
      <NotesLists/>
    </div>
  );
}

export default App;
