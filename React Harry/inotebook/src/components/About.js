import React, { useContext, useEffect } from 'react';
import noteContext from '../context/Notes/noteContext';

export const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [a]);
  return (
    <div>
      This is about <b>{a.state.name}</b> and he is in class{' '}
      <b>{a.state.class}</b>
    </div>
  );
};
