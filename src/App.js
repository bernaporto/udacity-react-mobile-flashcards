import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { ScreenIds, TitleMap, TabIds, Colors } from './utils/constants';
import { setLocalNotification } from './utils/notifications';
import store from './store';

import Home from './components/Home';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';
import QuizView from './components/QuizView';

const Stack = createStackNavigator();

export default function App() {
  useEffect(setLocalNotification);

  const getScreen = (id, Component) => {
    const screenProps = {
      name: id,
      component: Component,
      options: getOptions,
    };

    return (<Stack.Screen {...screenProps}/> );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          mode="modal"
          headerMode="float"
          screenOptions={{
            headerTintColor: Colors.TERTIARY,
          }}
        >
          { getScreen(ScreenIds.HOME, Home) }
          { getScreen(ScreenIds.DECK, DeckView) }
          { getScreen(ScreenIds.ADD_CARD, AddCard) }
          { getScreen(ScreenIds.QUIZ, QuizView) }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function getOptions({ route }) {
  let title = TitleMap[route.name];

  if (
    route.name === ScreenIds.HOME &&
    route.state &&
    route.state.index === 1
  ) {
    title = TitleMap[TabIds.ADD_DECK];
  }

  return {
    title,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
  };
}
