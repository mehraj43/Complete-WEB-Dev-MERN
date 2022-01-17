import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: '61e126659a70377604e25115e',
      user: '61e125d9a70377604e251158',
      title: 'South Movies',
      description: 'Going to watch all movies',
      tag: 'South',
      date: '2022-01-14T07:29:45.024Z',
      __v: 0,
    },
    {
      _id: '61e12673a70377604e6251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
    {
      _id: '61e12673a750377604e251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
    {
      _id: '61e12673a70377604e7251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
    {
      _id: '61e12673a570377604e251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
    {
      _id: '61e12673a703776704e251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
    {
      _id: '61e12673a703677604e251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    console.log('Adding Note');
    const note = {
      _id: '61e12673a703677604e25g1160',
      user: '61e125d9a70377604e251158',
      title: title,
      description: description,
      tag: tag,
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {};

  // Edit a Note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
