import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import Button from "./Button";
import { Colors } from "../utils/constants";

function Quiz(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.fill]}>
        <Text style={styles.text.counter}>1/2</Text>

        <View style={[styles.center, styles.fill]}>
          <Text style={styles.text.title}>Question?</Text>
          <Button title="Answer" clear color={Colors.WARNING} onPress={() => {}}/>
        </View>

        <Button title="Correct" onPress={() => {}}/>
        <Button title="Incorrect" color={Colors.WARNING} onPress={() => {}}/>
      </View>
    </View>
  );
}

export default Quiz;
