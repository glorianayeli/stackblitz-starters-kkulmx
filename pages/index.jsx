import { List } from 'exercises/exercise-01';
import { useState } from 'react';

export default function Index() {
  const [elements, addElement] = useState(['xd']);

  function handleClick(e) {
    addElement([...elements, e.target.value]);
  }
  return (
    <>
      <input type="text" onClick={handleClick}></input>
      <button>submit</button>
      {elements.map((element) => {
        return <p key={element.title}>{element.title}</p>;
      })}
    </>
  );
}
