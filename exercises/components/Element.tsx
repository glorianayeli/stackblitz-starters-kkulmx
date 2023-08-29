interface Props {
  element: {
    id: string,
    task: string
  },
  onDelete: Function
}

export function Element({ element, onDelete } : Props) {
  return (
    <>
      <p>{element.task}</p>
      <button onClick={() => onDelete(element.id)}> Delete </button>
    </>
  );
}
