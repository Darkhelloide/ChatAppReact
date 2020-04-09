import React from 'react';
import {Text, View, StyleSheet, FlatList, TextInput, Button} from 'react-native';
import { MessageItem } from './MessageItem';

export class Chat extends React.Component {
    render() {
        const {user, room} = this.props;
        const messages = [
            {
                content: 'Y a trop de trucs qui m\'enervent sur Terre',
                author: 'Robert',
                created_at: new Date()
            },{
                content: 'Les chomeurs sans travails, les orphelins sans pères',
                author: 'Amelie',
                created_at: new Date()
            },{
                content: 'Et tu parles fort',
                author: 'Robert',
                created_at: new Date()
            }
        ];

        return (
            <View style = {styles.container}>
                
                <FlatList style={styles.list}
                    data={messages.map((message,i) => ({ ...message, key: `message_${i}`}))}
                    renderItem={({ item: message})=>
                        <MessageItem user={user} message={message} />
                    }                
                />

                <View style={styles.composerContainer}>
                    <TextInput
                      
                        style={styles.composerInput}
                        placeholder="Saisir un message"
                    />

                    <Button
                    title="Envoyer"                   
                    />
                </View>              

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#EEE'
    },
    list:{
        flex: 1
    },
    composerContainer: {
        flex: 0,
        flexDirection: 'row',
        
        
    },
    composerInput: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 8,
        paddingRight: 8
    }
  });