import React from 'react';
import { DraggableBox } from './DraggableBox';

export const DraggableItems = () => {
  const items = [
    { id: 'item1', title: 'Chancellor\'s Research Fellowship' },
    { id: 'item2', title: 'Community Engagement' },
    { id: 'item3', title: 'EXCEL+' },
    { id: 'item4', title: 'Mini-Grants' },
    { id: 'item5', title: 'Prestigious Scholarships' },
    { id: 'item6', title: 'R\'Courses' },
    { id: 'item7', title: 'Tilga Internships' },
    { id: 'item8', title: 'UGR Journal' },
    { id: 'item9', title: 'UGR Symposium' },
    { id: 'item10', title: 'uResearch Portal' },
    { id: 'item11', title: 'University Honors' },
    { id: 'item12', title: 'Supplemental Instruction (SI)' },
    { id: 'item13', title: 'Tutorial Assistance Program (TAP)' },
    { id: 'item14', title: 'Transfer Success Program (TSP)' },
    { id: 'item15', title: 'Highlander Early Start Academy (HESA)' },
    { id: 'item16', title: 'Early Assist' },
    { id: 'item17', title: 'Assistance, Coaching, and Encouragement (ACE)' },
    { id: 'item18', title: 'R\'Success Workshop Series' },
    { id: 'item19', title: 'Health Professions Advising Center' },
    { id: 'item20', title: 'Non Course Based Writing Support' },
    { id: 'item21', title: 'First-Gen Experience' },
    { id: 'item22', title: 'Campus Collective' },
    { id: 'item23', title: 'Capital Internships - UCDC' },
    { id: 'item24', title: 'UC Center Sacramento - UCCS' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '70vh', overflowX: 'scroll', padding: '1rem', margin: '10px', border: '1px solid black' }}>
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
