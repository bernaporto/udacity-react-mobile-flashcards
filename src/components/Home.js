import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DeckList from "./DeckList";
import AddDeck from "./AddDeck";

const Tabs = createBottomTabNavigator();

function Home(props) {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Decks" component={DeckList} />
      <Tabs.Screen name="Add Deck" component={AddDeck} />
    </Tabs.Navigator>
  );
}

export default Home;