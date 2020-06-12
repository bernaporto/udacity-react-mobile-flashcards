import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

function Deck(props) {
  const { title, questions = [] } = props.data;

  return (
    <View>
      <Text>{ title }</Text>
      <Text>{ `${questions.length} cards` }</Text>

      <Button title="Add Card" onPress={() => {}}/>
      <Button title="Start Quiz" onPress={() => {}}/>
      <Button title="Delete Deck" onPress={() => {}}/>
    </View>
  );
}

function mapStateToProps(state, { route }) {
  const id = route.params.id;
  
  return {
    data: state[id],
  };
}

export default connect(mapStateToProps)(Deck);
