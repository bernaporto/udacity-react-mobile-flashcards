import { ActionType } from "./actions";

export default function decks(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.RECEIVE_DECKS:
      return {
        ...payload,
      };

    case ActionType.SET_DECK:
      return {
        ...state,
        [payload.id]: payload,
      };

    case ActionType.DELETE_DECK:
      delete state[payload];
      return {
        ...state,
      };

    case ActionType.ADD_CARD:
      const { id, card } = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          questions: (state[id].questions || []).concat([card]),
        }
      };
  
    default:
      return state;
  }
}