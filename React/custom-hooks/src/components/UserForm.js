import React from 'react';
import useInput from '../Hooks/useInput';

function UserForm() {
  const [fName, bindFName, resetFName] = useInput('');
  const [lName, bindLName, resetLName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${fName} ${lName}`);
    resetFName();
    resetLName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name </label>
          <input type='text' {...bindFName} />
        </div>
        <div>
          <label>Last Name </label>
          <input type='text' {...bindLName} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
