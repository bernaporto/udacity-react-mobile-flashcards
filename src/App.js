import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';

import Home from './components/Home';
import Deck from './components/Deck';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={Home} />
          <Stack.Screen name="Deck" component={Deck} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
