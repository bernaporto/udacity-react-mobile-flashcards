import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { handleInitialData } from "../store/actions";

import DeckList from "./DeckList";
import AddDeck from "./AddDeck";

const Tabs = createBottomTabNavigator();

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());  
  }

  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Decks" component={DeckList} />
        <Tabs.Screen name="Add Deck" component={AddDeck} />
      </Tabs.Navigator>
    );
  }
}

export default connect()(Home);