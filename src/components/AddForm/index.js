import React, { Fragment, useState, useRef, useEffect } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import "./AddForm.css";
import { Button } from "../../components";
import { InputBase, Paper, IconButton } from "@material-ui/core";

const AddForm = () => {
  const [showForm, setShowForm] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [showForm]);

  return (
    <Fragment>
      {showForm && (
        <div className="add-form">
          <div className="add-form-input">
            <Paper className="input-wrap">
              <InputBase
                fullWidth
                multiline
                placeholder="Введите название карточки"
                inputRef={inputRef}
              />
            </Paper>
            <div className="button-wrap">
              <Button />
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
      )}
      {!showForm && (
        <div
          className="panel__bottom-add-btn"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <AddOutlinedIcon />
          <span>Добавить еще одну карточку</span>
        </div>
      )}
    </Fragment>
  );
};

export default AddForm;
