import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import Title from "./Title";

function DeckDetails(props) {
  const { title, cardAmount } = props;

  return (
    <View>
      <Title>{title}</Title>
      <Text style={styles.center}>{`${cardAmount} cards`}</Text>
    </View>
  );
}

export default DeckDetails;
