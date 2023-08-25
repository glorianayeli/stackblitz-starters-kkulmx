import { useState } from 'react';
import { ElementList } from '/exercises/components/ElementList';

export function AddElementToList() {
  const [elements, addElement] = useState([]);
  const [input, setInput] = useState('');

  function handleClick() {
    addElement([...elements, { id: new Date().toISOString(), task: input }]);
  }
  function handleDeleteTodo(taskId) {
    addElement((prev) => prev.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleClick}>submit</button>
      <ElementList elements={elements} onDelete={handleDeleteTodo} />
    </>
  );
}
