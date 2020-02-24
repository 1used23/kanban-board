export default {
  addCard: (panelIndex, text) => ({
    type: "CARDS:ADD",
    payload: {
      panelIndex,
      text
    }
  }),
  reorderCards: ({ panelIndex, sourceIndex, destinationIndex }) => ({
    type: "CARDS:REORDER",
    payload: {
      panelIndex,
      sourceIndex,
      destinationIndex
    }
  })
};
