// DraggableItemContainer.js
import React from 'react';
import { DraggableBox } from './DraggableBox'; // Import your draggable item component

const styles = {
  width: 200, // Adjust size as needed
  height: '100vh',
  border: '1px solid black',
  padding: '10px',
  boxSizing: 'border-box',
  overflowY: 'auto',
};

const items = [
  { id: 'item1', content: 'Chancellor\'s Research Fellowship' },
  { id: 'item2', content: 'Community Engagement' },
  // Add other items here
];

export const DraggableItemContainer = () => {
  return (
    <div style={styles}>
      {items.map((item) => (
        <DraggableBox key={item.id} id={item.id} title={item.content} />
      ))}
    </div>
  );
};
