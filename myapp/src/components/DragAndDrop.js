
import { Container } from './Container';
import { CustomDragLayer } from './CustomDragLayer';

export const DragAndDrop = ({ onBack }) => {
  return (
    <div>
      <div>
        <Container/>
        <CustomDragLayer/>
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};
