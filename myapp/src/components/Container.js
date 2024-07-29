import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableBox } from './DraggableBox.js'
import { ItemTypes } from './ItemTypes.js'
const styles = {
  width: 800,
  height: 800,
  border: '1px solid black',
  position: 'relative',
  backgroundImage: 'url(/2.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}
export const Container = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 10, left: 850, title: 'UCDC' },
    b: { top: 50, left: 850, title: "R'Courses" },
  })
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset()
        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  )
}
