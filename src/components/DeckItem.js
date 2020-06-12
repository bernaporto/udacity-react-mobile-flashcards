import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

function DeckItem(props) {
  const navigation = useNavigation();

  const { data } = props;
  const { title, questions = [] } = data;

  const showDetails = () => navigation.navigate("Deck", { id: data.id });

  return (
    <TouchableWithoutFeedback onPress={showDetails}>
      <View>
        <Text>{ title }</Text>
        <Text>{ `${questions.length} cards` }</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DeckItem;
