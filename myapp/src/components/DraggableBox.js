import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { Box } from './Box';

const DraggableBox = ({ id, title, left, top }) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, left, top, title },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title]
  );

  useEffect(() => {
    // This effect ensures the preview is updated
    preview();
  }, [preview]);

  if (isDragging) {
    return <div ref={drag} />;
  }

  return (
    <div ref={drag} style={{ position: 'absolute', left, top }}>
      <Box title={title} />
    </div>
  );
};

export { DraggableBox };
