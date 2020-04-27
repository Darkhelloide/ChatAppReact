import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet, FlatList, TextInput, Button} from 'react-native';
import { MessageItem } from './MessageItem';
import {chatActions} from '../actions';

@connect (({chat:
                {user,
                room,
                messages,
                error}
}) => ({user, room, messages, error}))
export class Chat extends React.Component {

state = {
    content: ''
}

listEl = React.createRef();

getData() {
    const {messages } = this.props;
    return messages.map((message, i) => ({
        ...message, key: `message_${i}`
    }));
}

handleContentChange = content => {
    this.setState({content});
}

handleSendPress = e => {
    const {dispatch} = this.props;
    const {content} = this.state;
    if(content != '') 
    {
        dispatch(chatActions.sendMessage({content}));
    }
    this.setState({content: ''});
}


    render() {
        const {user, error} = this.props;
        const {content} = this.state;

        return (
            <View style = {styles.container}>              
                {error &&
                <Text>Error: {error.message}</Text>
                }
                <FlatList style={styles.list}
                    data={this.getData()}
                    renderItem={({ item: message})=>
                        <MessageItem user={user} message={message} />
                    }    
                    ref= {ref => this.listEl = ref}
                    onContentSizeChange={() => this.listEl.scrollToEnd({animated:true})}
                    onLayout={() => this.listEl.scrollToEnd({animated:true})}            
                />

                <View style={styles.composerContainer}>
                    <TextInput
                      
                        style={styles.composerInput}
                        placeholder="Write something"
                        value={content}
                        onChangeText={this.handleContentChange}
                    />

                    <Button
                    title="Send"   
                    onPress={this.handleSendPress} 
                    disabled={content ==''}               
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