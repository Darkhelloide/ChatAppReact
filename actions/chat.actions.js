import {chatService} from '../services';

export const chatActions = {
    join
}

function join(user, room) {
    return dispatch => {
        dispatch(request(user, room));
        chatService.join(user, room)
        .then(messages => dispatch(success(messages)))
        .catch(error => dispatch(failure(error)));
    };

    function request(user, room)
    { return {type: 'JOIN_REQUEST', user, room}};
    function success(messages) 
    {return {type: 'JOIN_SUCCESS', messages}};
    function failure(error) 
    {return {type: 'FAILURE', error}};
}