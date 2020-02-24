import React from "react";
import { Paper } from "@material-ui/core";
import "./Card.css";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ card, panelIndex, cardIndex }) => {
  return (
    <Draggable
      draggableId={`card-${panelIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided, snapshot) => (
        <div
          className="card-board"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Paper elevation={3} className="card">
            {card}
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
