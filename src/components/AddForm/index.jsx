import React, { Fragment, useState, useRef, useEffect } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import "./AddForm.css";
import { Button } from "../";
import { InputBase, Paper, IconButton } from "@material-ui/core";

const AddForm = ({ isNewPanel, onAddPanel, onAddCard, panelIndex }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputState, setInputState] = useState("");
  const inputRef = useRef(null);

  const onAdd = () => {
    if (inputState) {
      if (isNewPanel) {
        onAddPanel(inputState);
      } else {
        onAddCard(panelIndex, inputState);
      }
      setInputState("");
      setShowForm(!showForm);
    }
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [showForm]);

  return (
    <Fragment>
      {showForm ? (
        <div className="add-form">
          <div className="add-form-input">
            <Paper className="input-wrap">
              <InputBase
                fullWidth
                multiline
                placeholder={
                  isNewPanel
                    ? "Введите название колонки"
                    : "Введите название карточки"
                }
                inputRef={inputRef}
                onChange={e => setInputState(e.target.value)}
                value={inputState}
              />
            </Paper>
            <div className="button-wrap">
              <Button
                isNewPanel={isNewPanel}
                inputState={inputState}
                onAdd={onAdd}
              />
              <IconButton
                onClick={() => {
                  setShowForm(!showForm);
                }}
              >
                <CloseOutlinedIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="panel__bottom-add-btn"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <AddOutlinedIcon />
          <span>
            {isNewPanel
              ? "Добавить еще одну колонку"
              : "Добавить еще одну карточку"}
          </span>
        </div>
      )}
    </Fragment>
  );
};

export default AddForm;
