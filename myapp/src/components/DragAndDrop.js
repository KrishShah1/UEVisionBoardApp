import { Container } from './Container';
import { CustomDragLayer } from './CustomDragLayer';
import { DraggableItems } from './DraggableItems';

export const DragAndDrop = ({ onBack }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: '1rem' }}>
      <div style={{ flex: '1 1 30%', marginRight: '10px' }}>
        <DraggableItems />
      </div>
      <div style={{ flex: '1 1 70%' }}>
        <Container />
        <CustomDragLayer />
      </div>
      <button onClick={onBack} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>Back</button>
    </div>
  );
};
