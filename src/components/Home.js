import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import { handleInitialData } from "../store/actions";
import { TabIds, TabNameMap, TabIconMap, Colors } from "../utils/constants";
import { Entypo } from "@expo/vector-icons";

import DeckList from "./DeckList";
import AddDeck from "./AddDeck";

const Tabs = createBottomTabNavigator();

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  getTab = (id, Component) => {
    const tabProps = {
      name: id,
      component: Component,
      options: {
        tabBarLabel: TabNameMap[id],
        tabBarIcon: ({ color, size }) => (
          <Entypo name={TabIconMap[id]} color={color} size={size} />
        ),
      },
    };

    return (
      <Tabs.Screen {...tabProps} />
    );
  };

  render() {
    const tabBarOptions = {
      activeTintColor: Colors.PRIMARY,
    };

    return (
      <Tabs.Navigator tabBarOptions={tabBarOptions}>
        {this.getTab(TabIds.DECKS, DeckList)}
        {this.getTab(TabIds.ADD_DECK, AddDeck)}
      </Tabs.Navigator>
    );
  }
}

export default connect()(Home);