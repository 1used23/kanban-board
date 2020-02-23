import React from "react";
import { Typography } from "@material-ui/core";
import { Card, AddForm } from "../../components";

import "./Panel.css";

const Panel = ({
  title,
  cards,
  isNewPanel,
  onAddPanel,
  onAddCard,
  panelIndex
}) => {
  return (
    <div className="panel">
      {title && (
        <Typography variant="h6" className="panel__title">
          {title}
        </Typography>
      )}
      {cards && (
        <div className="panel__items">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
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
