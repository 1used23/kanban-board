import React from "react";
import { Typography } from "@material-ui/core";
import { Card, AddForm } from "../../components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./Panel.css";

const Panel = ({
  title,
  cards,
  isNewPanel,
  onAddPanel,
  onAddCard,
  panelIndex
}) => {
  const move = (arr, old_index, new_index) => {
    if (cards) {
      while (old_index < 0) {
        old_index += arr.length;
      }
      while (new_index < 0) {
        new_index += arr.length;
      }
      if (new_index >= arr.length) {
        let k = new_index - arr.length;
        while (k-- + 1) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
    }
  };

  return (
    <div className="panel">
      {title && (
        <Typography variant="h6" className="panel__title">
          {title}
        </Typography>
      )}
      {cards && (
        <DragDropContext
          onDragEnd={result => {
            move(cards, result.source.index, result.destination.index);
            console.log(
              "from: ",
              result.source.index,
              "to: ",
              result.destination.index
            );
          }}
        >
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                //style={getListStyle(snapshot.isDraggingOver)}
              >
                {cards.map((card, index) => (
                  <Draggable
                    key={index}
                    draggableId={`card-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card key={index} card={card} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}

      <AddForm
        isNewPanel={isNewPanel}
        onAddPanel={onAddPanel}
        onAddCard={onAddCard}
        panelIndex={panelIndex}
      />
    </div>
  );
};

export default Panel;
