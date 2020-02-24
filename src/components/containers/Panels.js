import React, { Fragment } from "react";
import { Panel } from "../../components";
import { connect } from "react-redux";
import panelsActions from "../../actions/panels";
import cardsActions from "../../actions/cards";
import { DragDropContext } from "react-beautiful-dnd";

const Panels = ({ items, addPanel, addCard, reorderCards }) => {
  const onDragEnd = result => {
    const { source, destination } = result;
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }
    reorderCards({
      source,
      destination
    });
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {items.map((item, index) => (
          <Panel
            key={index}
            panelIndex={index}
            onAddPanel={addPanel}
            onAddCard={addCard}
            onReorderCards={reorderCards}
            {...item}
          />
        ))}
      </DragDropContext>
      <Panel isNewPanel onAddPanel={addPanel} onAddCard={addCard} />
    </Fragment>
  );
};

export default connect(({ panels }) => ({ items: panels }), {
  ...panelsActions,
  ...cardsActions
})(Panels);
