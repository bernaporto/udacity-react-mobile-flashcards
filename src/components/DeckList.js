import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { valuesToArray } from "../utils/utils";

import DeckItem from "./DeckItem";

function DeckList(props) {
  const { decks } = props;

  return (
    <View>
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

function mapStateToProps(state) {
  return {
    decks: valuesToArray(state),
  };
}
export default connect(mapStateToProps)(DeckList);
