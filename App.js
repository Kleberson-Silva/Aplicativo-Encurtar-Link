import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Rotas from './src/routs.js';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}


