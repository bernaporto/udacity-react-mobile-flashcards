import React from "react";
import { View, Text } from "react-native";
import DeckItem from "./DeckItem";

function DeckList(props) {
  return (
    <View>
      <Text>DeckList</Text>
      <DeckItem/>
      <DeckItem/>
      <DeckItem/>
    </View>
  );
}

export default DeckList;
