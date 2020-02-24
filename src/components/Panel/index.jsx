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
  panelIndex,
  onReorderCards
}) => {
  return (
    <div className="panel">
      {title && (
        <Typography variant="h6" className="panel__title">
          {title}
        </Typography>
      )}
      {cards && (
        <Droppable type="CARDS" droppableId={`column-${panelIndex}`}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  panelIndex={panelIndex}
                  cardIndex={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
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
