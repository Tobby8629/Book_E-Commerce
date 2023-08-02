// components/DraggableDiv.js
import React from 'react';

const DraggableDiv = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', event.currentTarget.id);
  };

  return (
    <div
      id="draggableDiv"
      draggable="true"
      onDragStart={handleDragStart}
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: 'lightblue',
        cursor: 'move',
      }}
    >
      Drag me!
    </div>
  );
};

export default DraggableDiv;
