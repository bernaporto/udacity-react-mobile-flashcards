import React, { useState } from "react";
import { View, Text } from "react-native";
import { Colors } from "../utils/constants";
import styles from "../styles";

import Button from "./Button";

function QuizCard(props) {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleShowAnswer = () => setShowAnswer(!showAnswer);

  const { card, setRightAnswer, setWrongAnswer } = props;

  const displayText = showAnswer ? card.answer : card.question;
  const buttonText = showAnswer ? "Show Question" : "Show Answer";

  return (
    <View style={[styles.fill]}>
      <View style={[styles.center, styles.fill]}>
        <Text style={styles.text.title}>{displayText}</Text>
        <Button title={buttonText} clear color={Colors.WARNING} onPress={toggleShowAnswer} />
      </View>

      <Button title="Correct" onPress={setRightAnswer} />
      <Button title="Incorrect" color={Colors.WARNING} onPress={setWrongAnswer} />
    </View>
  );
}

export default QuizCard;
