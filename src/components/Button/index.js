import React from "react";
import "./Button.css";
import { Button as ButtonUI } from "@material-ui/core";

const Button = () => {
  return (
    <ButtonUI
      className="button"
      variant="contained"
      color="primary"
      disableElevation
    >
      Добавить карточку
    </ButtonUI>
  );
};

export default Button;
