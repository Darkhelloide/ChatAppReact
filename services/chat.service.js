import PouchDB from 'pouchdb-react-native';

let db, currentUser, currentroom = null;

export const chatService = {
    join,
    sendMessage
}

    function join(user, room){
        currentUser = user || 'Anonymous';
        currentroom = room || 'général';
        db = new PouchDB(currentroom);

        return db.allDocs({
            include_docs: true,
        }).then(response =>
            response.rows
            .map(row => row.doc)
            .sort((a,b) => a.created_at > b.created_at)
            );
        }

    function sendMessage(message) {
        message = {
            ...message,
             author: currentUser,
             created_at: new Date()
            };
        return db.post(message).then(({id}) => ({
            ...message,
            id
        }));
    }

