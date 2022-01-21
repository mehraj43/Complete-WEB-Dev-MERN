import NoteContext from './noteContext';
import { useState, useEffect } from 'react';

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  // const [authToken, setAuthToken] = useState();

  // Fetch all Notes
  const fetchNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYTU1M2ZmYjEyOTZmYjk2MzY4NWYwIn0sImlhdCI6MTY0Mjc0NzQ4Nn0.H6jga5xk7046vVkW_yh1N57jkd6jxYEfiXU0fxWhoqk',
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    console.log('Adding Note');
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlYTU1M2ZmYjEyOTZmYjk2MzY4NWYwIn0sImlhdCI6MTY0Mjc0NzQ4Nn0.H6jga5xk7046vVkW_yh1N57jkd6jxYEfiXU0fxWhoqk',
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to add Note in client
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMTI1ZDlhNzAzNzc2MDRlMjUxMTU4In0sImlhdCI6MTY0MjE0NTI3M30.51UuQmRt1xZc5OFaYhiGb7cTc_aP1jVeuARvGEbAEI8',
      },
    });

    // Logic to delete note in client
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMTI1ZDlhNzAzNzc2MDRlMjUxMTU4In0sImlhdCI6MTY0MjE0NTI3M30.51UuQmRt1xZc5OFaYhiGb7cTc_aP1jVeuARvGEbAEI8',
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // Logic to edit note in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < newNotes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
