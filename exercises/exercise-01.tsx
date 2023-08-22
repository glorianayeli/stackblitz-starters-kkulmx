/*const elements = [{ title: 'Elemento 1' }, { title: 'Elemento 2' }];*/
/*props es el object que recibe react en el component por lo cual debes destructurar el objecto o poner props.index*/
export function List({ elements, onDelete }) {
  return (
    <div>
      {elements.map((element) => {
        return (
          <>
            <p key={element.id}>{element.task}</p>
            <button onClick={onDelete(element.id)}>eliminar</button>
          </>
        );
      })}
    </div>
  );
}
