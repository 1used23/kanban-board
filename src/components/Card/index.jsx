import React from "react";
import { Paper } from "@material-ui/core";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div>
      <Paper elevation={3} className="card">
        {card}
      </Paper>
    </div>
  );
};

export default Card;
