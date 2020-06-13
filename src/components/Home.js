import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { handleInitialData } from "../store/actions";
import { TabIds } from "../utils/constants";

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
        <Tabs.Screen name={TabIds.DECKS} component={DeckList} />
        <Tabs.Screen name={TabIds.ADD_DECK} component={AddDeck} />
      </Tabs.Navigator>
    );
  }
}

export default connect()(Home);