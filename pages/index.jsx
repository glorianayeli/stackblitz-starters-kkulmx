import { List } from 'exercises/exercise-01';
import { useState } from 'react';

export default function Index() {
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
      <List elements={elements}/>
    </>
  );
  FG;
}
