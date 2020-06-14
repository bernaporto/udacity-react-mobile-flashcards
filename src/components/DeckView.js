import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { handleDeleteDeck } from "../store/actions";
import { Colors, ScreenIds } from "../utils/constants";
import styles from "../styles";

import Button from "./Button";
import DeckDetails from "./DeckDetails";

function DeckView(props) {
  const { data, dispatch, navigation } = props;
  const { title = "", questions = [] } = data;

  const showAddCard = () => navigation.navigate(ScreenIds.ADD_CARD, { id: data.id });
  const startQuiz = () => navigation.navigate(ScreenIds.QUIZ, { id: data.id });
  const deleteDeck = () => {
    navigation.goBack();
    dispatch(handleDeleteDeck(data));
  }

  const quizEnabled = data.questions && data.questions.length > 0;

  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.fill]}>
        <DeckDetails title={title} cardAmount={questions.length} />

        <View style={{ marginBottom: 10 }}/>

        <Button title="Add Card" onPress={showAddCard} />
        <Button title="Start Quiz" disabled={!quizEnabled} onPress={startQuiz} color={Colors.SECONDARY}/>
        <Button title="Delete Deck" clear onPress={deleteDeck} color={Colors.WARNING}/>
      </View>
    </View>
  );
}

function mapStateToProps(state, { route }) {
  const id = route.params.id;

  return {
    data: state[id] || {},
  };
}

export default connect(mapStateToProps)(DeckView);
