import { useState } from 'react';
import { List } from '/exercises/exercise-01';
export default function AddElementToList() {
  const [elements, addElement] = useState(['xd']);
  const [input, setInput] = useState('');

  function handleClick() {
    addElement([...elements, input]);
  }
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleClick}>submit</button>
      <List elements={elements} />
    </>
  );
}
