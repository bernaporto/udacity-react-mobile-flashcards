import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import styles from "../styles";

import Button from "./Button";
import DeckDetails from "./DeckDetails";

function DeckView(props) {
  const { title, questions = [] } = props.data;

  return (
    <View style={styles.container}>
    <View style={[styles.card, { flex: 1 }]}>
      <DeckDetails title={title} cardAmount={questions.length} />

      <Button title="Add Card" onPress={() => { }}/>
      <Button title="Start Quiz" onPress={() => { }}/>
      <Button title="Delete Deck" onPress={() => { }}/>
    </View>
    </View>
  );
}

function mapStateToProps(state, { route }) {
  const id = route.params.id;

  return {
    data: state[id],
  };
}

export default connect(mapStateToProps)(DeckView);
