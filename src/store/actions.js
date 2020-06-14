import API from '../utils/api';

export const ActionType = {
  RECEIVE_DECKS: 'RECEIVE_DECKS',
  SET_DECK: 'SET_DECK',
  DELETE_DECK: 'DELETE_DECK',
  ADD_CARD: 'ADD_CARD',
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

const setDeck = (deck) => createAction(ActionType.SET_DECK, deck);
export function handleAddDeck(data) {
  return (dispatch) => {
    return API.create(data)
      .then((deck) => dispatch(setDeck(deck)));
  };
}

export function handleDeleteDeck(deck) {
  return (dispatch) => {
    dispatch(createAction(ActionType.DELETE_DECK, deck.id));

    return API.delete(deck.id)
      .catch((err) => {
        console.warn(err);
        dispatch(setDeck(deck));
      });
  };
}

const addCard = (id, card) => createAction(ActionType.ADD_CARD, { id, card });
export function handleAddCard(id, card) {
  return (dispatch, getState) => {
    const previousDeck = {
      ...getState()[id],
    };

    dispatch(addCard(id, card));

    return API.update({ ...getState()[id] })
      .catch((err) => {
        console.warn(err);
        dispatch(setDeck(previousDeck));
      });
  };
}
