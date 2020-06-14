import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { valuesToArray } from '../utils/utils';

import DeckItem from './DeckItem';
import styles from '../styles';

function DeckList() {
  const decks = useSelector(state => valuesToArray(state));

  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DeckItem data={item}/>
        )}
      />
    </View>
  );
}

export default DeckList;
