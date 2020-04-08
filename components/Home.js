import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Home extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {[styles.h1, styles.big]}>Homepage !!</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1:{
        color: 'red'
    },
    big:{
        fontSize: 20,
        color: 'blue'
    }
  });