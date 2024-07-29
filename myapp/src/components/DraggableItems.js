// DraggableItems.js
import React from 'react';
import { DraggableBox } from './DraggableBox';

export const DraggableItems = () => {
  const items = [
    { id: 'a', title: 'UCDC' },
    { id: 'b', title: "R'Courses" },
    // Add more items as needed
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid black' }}>
      {items.map(item => (
        <DraggableBox
          key={item.id}
          id={item.id}
          title={item.title}
          left={0}
          top={0}
        />
      ))}
    </div>
  );
};
