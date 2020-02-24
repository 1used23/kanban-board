export default {
  addCard: (panelIndex, text) => ({
    type: "CARDS:ADD",
    payload: {
      panelIndex,
      text
    }
  }),
  reorderCards: ({ source, destination }) => ({
    type: "CARDS:REORDER",
    payload: {
      source,
      destination
    }
  })
};
