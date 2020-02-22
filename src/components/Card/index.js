import React from "react";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ text }) => {
  return (
    <div>
      <Paper elevation={3} className="card">
        {text}
      </Paper>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired
};

export default Card;
