import { ActionType } from "./actions";

export default function decks(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.RECEIVE_DECKS:
      return {
        ...payload,
      };

    case ActionType.ADD_DECK:
      return {
        ...state,
        [payload.id]: payload,
      };

    case ActionType.DELETE_DECK:
      delete state[payload];
      return {
        ...state,
      };
  
    default:
      return state;
  }
}