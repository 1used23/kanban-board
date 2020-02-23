import React from "react";
import "./Button.css";
import { Button as ButtonUI } from "@material-ui/core";

const Button = ({text}) => {
  return (
    <ButtonUI
      className="button"
      variant="contained"
      color="primary"
      disableElevation
    >
      {text}
    </ButtonUI>
  );
};

export default Button;
