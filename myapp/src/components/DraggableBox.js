import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { Box } from './Box';

const DraggableBox = ({ id, title, left, top }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { id, left, top, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const initialStyle = left === 0 && top === 0 ? {} : { position: 'absolute', left, top };

  return (
    <div ref={drag} style={{ ...initialStyle, opacity: isDragging ? 0.5 : 1, margin: '5px', fontSize: '12px' }}>
      <Box title={title} />
    </div>
  );
};

export { DraggableBox };
