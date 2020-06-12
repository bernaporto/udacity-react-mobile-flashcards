import React from "react";
import { View, Text } from "react-native";

function DeckItem(props) {
  const { title, questions = [] } = props.data;

  return (
    <View>
      <Text>{ title }</Text>
      <Text>{ `${questions.length} cards` }</Text>
    </View>
  );
}

export default DeckItem;
