import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteDeck } from '../store/actions';
import { Colors, ScreenIds } from '../utils/constants';
import { valuesToArray } from '../utils/utils';
import styles from '../styles';

import Button from './Button';
import DeckDetails from './DeckDetails';

function DeckView(props) {
  const { navigation, route } = props;
  const dispatch = useDispatch();
  const data = useSelector(state => getDeckData(state, route.params));

  const deleteDeck = () => {
    navigation.goBack();
    dispatch(handleDeleteDeck(data));
  };

  const { id, title, questions = [] } = data;
  const quizEnabled = questions.length > 0;

  const showAddCard = () => navigation.navigate(ScreenIds.ADD_CARD, { id });
  const startQuiz = () => navigation.navigate(ScreenIds.QUIZ, { id });

  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.fill]}>
        <View style={[styles.fill, styles.center]}>
          <DeckDetails title={title} cardAmount={questions.length} />
        </View>

        <View style={styles.fill}>
          <Button title="Add Card" onPress={showAddCard} />
          <Button title="Start Quiz" disabled={!quizEnabled} onPress={startQuiz} color={Colors.SECONDARY}/>
        </View>

        <Button title="Delete Deck" clear onPress={deleteDeck} color={Colors.WARNING}/>
      </View>
    </View>
  );
}

function getDeckData(state, params) {
  const id = params && params.id;

  if (id) return state[id] || {};
  return valuesToArray(state).pop() || {};
}

export default DeckView;
