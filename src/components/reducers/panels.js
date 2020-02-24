import reorderCards from "../../helpers/reorderCards";

const initialState = [
  {
    title: "План на месяц",
    cards: [
      "Пройти курс по React",
      "Отметить день рождения",
      "Записаться на курсы английского языка, чтобы уехать жить в Лондон",
      "Пройти курс по React",
      "Отметить день рождения",

      "Записаться на курсы английского языка, чтобы уехать жить в Лондон"
    ]
  },
  {
    title: "План на день",
    cards: [
      "Записаться на курс по React",
      "Забронировать тир на субботу",
      "Накидать тем для статей в блог",
      "Сделать колонку Итоги"
    ]
  },
  {
    title: "Готово",
    cards: ["Накидать тем для статей в блог", "Сделать колонку Итоги"]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return state.map((item, index) => {
        if (action.payload.panelIndex === index) {
          if (item.cards) {
            return {
              ...item,
              cards: [...item.cards, action.payload.text]
            };
          }
        }
        return item;
      });

    case "CARDS:REORDER": {
      const { source, destination } = action.payload;
      return reorderCards({
        state,
        source,
        destination
      });
    }

    case "PANEL:ADD":
      return [...state, { title: action.payload, cards: [] }];

    default:
      return state;
  }
};
