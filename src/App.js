import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { ScreenIds } from './utils/constants';
import store from './store';

import Home from './components/Home';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ScreenIds.HOME} component={Home} options={options}/>
          <Stack.Screen name={ScreenIds.DECK} component={DeckView} options={options}/>
          <Stack.Screen name={ScreenIds.ADD_CARD} component={AddCard} options={options}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const options = {
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
};

