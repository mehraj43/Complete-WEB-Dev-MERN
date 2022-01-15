import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: '61e12669a70377604e25115e',
      user: '61e125d9a70377604e251158',
      title: 'South Movies',
      description: 'Going to watch all movies',
      tag: 'South',
      date: '2022-01-14T07:29:45.024Z',
      __v: 0,
    },
    {
      _id: '61e12673a70377604e251160',
      user: '61e125d9a70377604e251158',
      title: 'Pushpa',
      description: "I'm gonna watch it",
      tag: 'In Mobile',
      date: '2022-01-14T07:29:55.285Z',
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
