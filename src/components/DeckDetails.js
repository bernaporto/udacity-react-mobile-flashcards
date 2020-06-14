import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

function DeckDetails(props) {
  const { title, cardAmount } = props;

  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.text.title}>{title}</Text>
      <Text style={styles.text.center}>{`${cardAmount} cards`}</Text>
    </View>
  );
}

export default DeckDetails;
