/*const elements = [{ title: 'Elemento 1' }, { title: 'Elemento 2' }];*/
/*props es el object que recibe react en el component por lo cual debes destructurar el objecto o poner props.index*/
import { Fragment } from 'react';
import { Element, Props } from 'exercises/components/Element';

export function ElementList({ elements, onDelete }: Props) {
  return (
    <div>
      {elements.map((element) => {
        return <Element element={element} onDelete={onDelete} />;
      })}
    </div>
  );
}
