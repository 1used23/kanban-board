import React from "react";
import "./Button.css";
import { Button as ButtonUI } from "@material-ui/core";

const Button = ({ isNewPanel, inputState, onAdd }) => {
  return (
    <ButtonUI
      className="button"
      variant="contained"
      color="primary"
      disableElevation
      onClick={() => onAdd()}
    >
      {isNewPanel ? "Добавить колонку" : "Добавить карточку"}
    </ButtonUI>
  );
};

export default Button;
