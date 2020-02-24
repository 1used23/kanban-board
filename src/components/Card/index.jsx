import React from "react";
import { Paper } from "@material-ui/core";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <Paper elevation={3} className="card">
      {card}
    </Paper>
  );
};

export default Card;
