import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../utils/constants';
import styles from '../styles';

import Button from './Button';
import DeckDetails from './DeckDetails';

function QuizResult(props) {
  const { id, results, onRestart, goBack } = props;
  const { title, cardAmount } = useSelector(state => getDeckData(state, id));

  const getResultText = (text, bold) => {
    const textStyle = [
      styles.text.result,
      styles.text.center,
    ];

    if (bold) textStyle.push(styles.text.bold);

    return (
      <Text style={textStyle}>{ text }</Text>
    );
  };

  return (
    <View style={styles.fill}>
      <DeckDetails title={title} cardAmount={cardAmount}/>

      <View style={[styles.fill, styles.center]}>
        { getResultText(`Right Answers: ${results.rightAnswers}`) }
        { getResultText(`Wrong Answers: ${results.wrongAnswers}`) }
        { getResultText(`Performance: ${results.performance}%`, true) }
      </View>

      <Button title="Restart Quiz" color={Colors.SECONDARY} onPress={onRestart} />
      <Button title="Back to Deck" color={Colors.TERTIARY} onPress={goBack} />
    </View>
  );
}

function getDeckData(state, id) {
  return {
    title: state[id].title,
    cardAmount: state[id].questions.length,
  };
}

export default QuizResult;
