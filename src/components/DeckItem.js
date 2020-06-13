import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DeckDetails from "./DeckDetails";
import styles from "../styles";

function DeckItem(props) {
  const navigation = useNavigation();

  const { data } = props;
  const { title, questions = [] } = data;

  const showDetails = () => navigation.navigate("Deck", { id: data.id });

  return (
    <TouchableWithoutFeedback onPress={showDetails}>
      <View style={[styles.card, styles.center]}>
        <DeckDetails title={title} cardAmount={questions.length} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DeckItem;
