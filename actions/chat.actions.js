import {chatService} from '../services';

export const chatActions = {
    join,
    sendMessage
}

function join(user, room) {
    return dispatch => {
        dispatch(request(user, room));
        chatService.join(user, room,
            messages => dispatch(syncSuccess(messages)),
            error => dispatch(syncFailure(error))
            )
        .then(messages => dispatch(success(messages)))
        .catch(error => dispatch(failure(error)));
    };

    function request(user, room)
    { return {type: 'JOIN_REQUEST', user, room}};
    function success(messages) 
    {return {type: 'JOIN_SUCCESS', messages}};
    function failure(error) 
    {return {type: 'FAILURE', error}
    };
    function syncSuccess(messages) {
        return {type: 'SYNC_SUCCESS', messages};
    }
    function syncFailure(error) {
        return {type: 'SYNC_FAILURE', error};
    }    
}

function sendMessage(message) {
    return dispatch => {
        dispatch(request(message));
        chatService.sendMessage(message)
        .then(message => dispatch(success(message)))
        .catch(error => dispatch(failure(error)));
    };

    function request(message)
    { return {type: 'SEND_MESSAGE_REQUEST', message}};
    function success(message) 
    {return {type: 'SEND_MESSAGE_SUCCESS', message}};
    function failure(error) 
    {return {type: 'FAILURE', error}
    };
}
