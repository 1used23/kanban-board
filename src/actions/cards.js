export default {
  addCard: (panelIndex, text) => ({
    type: "CARDS:ADD",
    payload: {
      panelIndex,
      text
    }
  })
};
