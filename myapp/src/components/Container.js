import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { DraggableBox } from './DraggableBox';
import { ItemTypes } from './ItemTypes';

const styles = {
  width: 800,
  height: 800,
  border: '1px solid black',
  position: 'relative',
  backgroundImage: 'url(/2.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
};

export const Container = () => {
  const [boxes, setBoxes] = useState({});

  const moveBox = useCallback(
    (id, left, top, title) => {
      setBoxes((prevBoxes) =>
        update(prevBoxes, {
          [id]: {
            $set: { left, top, title },
          },
        })
      );
    },
    []
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top, item.title);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  );
};
