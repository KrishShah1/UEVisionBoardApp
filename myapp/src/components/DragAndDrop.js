import React, { useState } from 'react';
import '../styles/DragAndDrop.css';

function DragAndDrop({ onBack }) {
  const initialItems = [
    { id: 'item1', content: 'Chancellor\'s Research Fellowship' },
    { id: 'item2', content: 'Community Engagement' },
    { id: 'item3', content: 'EXCEL+' },
    { id: 'item4', content: 'Mini-Grants' },
    { id: 'item5', content: 'Prestigious Scholarships' },
    { id: 'item6', content: 'R\'Courses' },
    { id: 'item7', content: 'Tilga Internships' },
    { id: 'item8', content: 'UGR Journal' },
    { id: 'item9', content: 'UGR Symposium' },
    { id: 'item10', content: 'uResearch Portal' },
    { id: 'item11', content: 'University Honors' },
    { id: 'item12', content: 'Supplemental Instruction (SI)' },
    { id: 'item13', content: 'Tutorial Assistance Program (TAP) (Academic Resource Center)' },
    { id: 'item14', content: 'Transfer Success Program (TSP) (Academic Resource Center)' },
    { id: 'item15', content: 'Highlander Early Start Academy (HESA) (Academic Resource Center)' },
    { id: 'item16', content: 'Early Assist (Academic Resource Center)' },
    { id: 'item17', content: 'Assistance, Coaching, and Encouragement (ACE) (Academic Resource Center)' },
    { id: 'item18', content: 'R\'Success Workshop Series (not a high impact practice) (Academic Resource Center)' },
    { id: 'item19', content: 'Health Professions Advising Center' },
    { id: 'item20', content: 'Non Course Based Writing Support' },
    { id: 'item21', content: 'First-Gen Experience' },
    { id: 'item22', content: 'Campus Collective' },
    { id: 'item23', content: 'Capital Internships - UCDC' },
    { id: 'item24', content: 'UC Center Sacramento - UCCS' }
  ];

  const [items, setItems] = useState(initialItems);
  const [droppedItems, setDroppedItems] = useState({
    drop1: [],
    drop2: [],
    drop3: [],
    drop4: []
  });

  const labels = {
    drop1: "I am looking forward to...",
    drop2: "I am excited to work on...",
    drop3: "This opportunity interests me",
    drop4: "I will learn from..."
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropLocation) => {
    const id = e.dataTransfer.getData('text');
    const droppedItem = items.find(item => item.id === id);
    if (droppedItem) {
      setDroppedItems(prevState => ({
        ...prevState,
        [dropLocation]: [...prevState[dropLocation], droppedItem]
      }));
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
  };

  return (
    <div>
        <div className="drag-and-drop-container">
            <div className="items-container">
                {items.map(item => (
                <div
                    key={item.id}
                    id={item.id}
                    draggable
                    onDragStart={(e) => onDragStart(e, item.id)}
                    className="draggable-item"
                >
                    {item.content}
                </div>
                ))}
            </div>
            <div className="drop-locations-container">
                {Object.keys(droppedItems).map((dropLocation) => (
                <div
                    key={dropLocation}
                    className="drop-container"
                    onDragOver={onDragOver}
                    onDrop={(e) => onDrop(e, dropLocation)}
                >
                    <div className="drop-label">
                    {labels[dropLocation]}
                    </div>
                    {droppedItems[dropLocation].map(item => (
                    <div key={item.id} className="dropped-item">
                        {item.content}
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
        <div>
            <button onClick={onBack}>Back</button>
        </div>
    </div>
  );
}

export default DragAndDrop;
