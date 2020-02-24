import React, { Fragment } from "react";
import { Panel } from "../../components";
import { connect } from "react-redux";
import panelsActions from "../../actions/panels";
import cardsActions from "../../actions/cards";

const Panels = ({ items, addPanel, addCard, reorderCards }) => (
  <Fragment>
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
    <Panel isNewPanel onAddPanel={addPanel} onAddCard={addCard} />
  </Fragment>
);

export default connect(({ panels }) => ({ items: panels }), {
  ...panelsActions,
  ...cardsActions
})(Panels);
