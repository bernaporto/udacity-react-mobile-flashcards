import API from "../utils/api";

export const ActionType = {
  RECEIVE_DECKS: "RECEIVE_DECKS",
  ADD_DECK: "ADD_DECK",
  DELETE_DECK: "DELETE_DECK",
};

function createAction(type, payload) {
  return { type, payload };
}

export function handleInitialData() {
  return (dispatch) => {
    return API.readAll()
      .then((decks) => dispatch(
        createAction(ActionType.RECEIVE_DECKS, decks)
      ));
  };
}

const addDeck = (deck) => createAction(ActionType.ADD_DECK, deck);
export function handleAddDeck(data) {
  return (dispatch) => {
    return API.create(data)
      .then((deck) => dispatch(addDeck(deck)));
  };
}

export function handleDeleteDeck(deck) {
  return (dispatch) => {
    dispatch(createAction(ActionType.DELETE_DECK, id));

    return API.delete(deck.id)
      .catch(() => dispatch(addDeck(deck)));
  };
}
