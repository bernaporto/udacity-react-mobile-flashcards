import { ActionType } from './actions';

export default function decks(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.RECEIVE_DECKS:
      return {
        ...payload,
      };

    case ActionType.SET_DECK:
      return mergeDeck(state, payload);

    case ActionType.DELETE_DECK: {
      delete state[payload];
      return {
        ...state,
      };
    }

    case ActionType.ADD_CARD: {
      const { id, card } = payload;
      const deck = { ...state[id] };
      deck.questions = (deck.questions || []).concat([card]);

      return mergeDeck(state, deck);
    }

    default:
      return state;
  }
}

function mergeDeck(state, deck) {
  const newState = { ...state };
  newState[deck.id] = deck;

  return newState;
}
