import { useState } from 'react';
import { List } from '/exercises/exercise-01';
export function AddElementToList() {
  const [elements, addElement] = useState([]);
  const [input, setInput] = useState('');
  let key: number = 1;

  function handleClick() {
    addElement([...elements, { id: key++, task: input }]);
  }
  function handleDeleteTodo(taskId) {
    addElement(elements.filter((task) => task.id !== taskId));
  }
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleClick}>submit</button>
      <List elements={elements} onDelete={handleDeleteTodo} />
    </>
  );
}
