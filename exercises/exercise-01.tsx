const elements = [{ title: 'Elemento 1' }, { title: 'Elemento 2' }];
export function List() {
  return (
    <div>
      {elements.map((element) => {
        return <p key={element.title}>{element.title}</p>;
      })}
    </div>
  );
}
