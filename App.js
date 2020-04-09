import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Home, Chat} from './components';

const store = createStore(rootReducer);

export default class App extends React.Component {
 render(){
  return (
    <Provider store={store}>
      <Router>
        <Stack key="mainStack">
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="chat" component={Chat} title="Chat"/>
        </Stack>
      </Router>
    </Provider> 
   );
  }
}


