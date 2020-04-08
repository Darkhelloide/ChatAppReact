import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import {Home, Chat} from './components';

export default class App extends React.Component {
 render(){
  return (
    <Router>
      <Stack key="mainStack">
        <Scene key="home" component={Home} title="Home"/>
        <Scene key="chat" component={Chat} title="Chat"/>
      </Stack>
    </Router>
      
   );
  }
}


