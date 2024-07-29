import { useDragLayer } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { DraggableBox } from './DraggableBox';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

function getItemStyles(initialOffset, isSnapToGrid) {
  if (!initialOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = initialOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

export const CustomDragLayer = (props) => {
  const { itemType, isDragging, item, initialOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  function renderItem() {
    switch (itemType) {
      case ItemTypes.BOX:
        return <DraggableBox title={item.title} />;
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(initialOffset, props.snapToGrid)}>
        {renderItem()}
      </div>
    </div>
  );
};
