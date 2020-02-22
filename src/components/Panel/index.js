import React from "react";
import { Typography } from "@material-ui/core";
import { Card, AddForm } from "../../components";

import "./Panel.css";

const Panel = ({ title, items }) => {
  return (
    <div className="panel">
      {title && (
        <Typography variant="h6" className="panel__title">
          {title}
        </Typography>
      )}
      {items && (
        <div className="panel__items">
          {items.length && items.map(card => <Card {...card} />)}
        </div>
      )}

      <AddForm />
    </div>
  );
};

export default Panel;
