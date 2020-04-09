
const initState = {
    user: "Robert",
    room: null,
    messages: [
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
    ]
}

export const chat = function(state = initState, action) {

    switch(action.type) {
        case 'JOIN_REQUEST':
            return{
                ...state,
                user: action.user,
                room: action.room
            };

        case 'JOIN_SUCCESS':
            return {
                ...state,
                message: action.messages
            };    
    }

    return state;
}