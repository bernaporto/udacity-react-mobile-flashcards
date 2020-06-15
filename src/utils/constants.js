export const StorageKey = {
  DECK_LIST: 'Flashcards:DECK_LIST',
  NOTIFICATIONS: 'Flashcards:NOTIFICATIONS '
};

export const Colors = {
  PRIMARY: '#5eba61',
  SECONDARY: '#ff7600',
  TERTIARY: '#394458',
  WARNING: '#dd3c3c',

  WHITE: '#FFF',
  GREY: '#CCC',
  DARK_GREY: '#777',
  BLACK: '#000',
};

export const ScreenIds = {
  HOME: 'HOME',
  ADD_CARD: 'ADD_CARD',
  DECK: 'DECK',
  QUIZ: 'QUIZ',
};

export const TabIds = {
  DECKS: 'DECKS',
  ADD_DECK: 'ADD_DECK',
};

export const TabNameMap = {
  [TabIds.DECKS]: 'Decks',
  [TabIds.ADD_DECK]: 'Add Deck',
};

export const TabIconMap = {
  [TabIds.DECKS]: 'list',
  [TabIds.ADD_DECK]: 'add-to-list',
};

export const TitleMap = {
  [ScreenIds.HOME]: 'Deck List',
  [TabIds.ADD_DECK]: 'Create New Deck',
  [ScreenIds.ADD_CARD]: 'New Card',
  [ScreenIds.DECK]: 'Deck Info',
  [ScreenIds.QUIZ]: 'Quiz',
};
