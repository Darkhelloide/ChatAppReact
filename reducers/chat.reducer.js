
const initState = {
    user: "Robert",
    room: null,
    messages: [],
    error: undefined
}

export const chat = function(state = initState, action) {

    switch(action.type) {
        case 'JOIN_REQUEST':
            return{
                ...state,
                user: action.user,
                room: action.room,
                error: null
            };

        case 'JOIN_SUCCESS':
            return {
                ...state,
                messages: action.messages,
                error: null
            };  

        case 'SEND_MESSAGE_SUCCESS':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message
                ]
            }
            
        case 'FAILURE':
            return {
                ...state,
                error: action.error
            };
    }

    return state;
}