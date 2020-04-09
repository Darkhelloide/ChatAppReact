import PouchDB from 'pouchdb-react-native';

let db, user,room = null;

export const chatService = {
    join,
    sendMessage
}

    function join(user, room){
        user = user || 'Anonymous';
        room = room || 'général';
        db = new PouchDB(room);

        return db.allDocs({
            include_docs: true,
        }).then(response =>
            response.rows.map(row => row.doc)
            );
        }

    function sendMessage(message) {
        message = {
            ...message,
             user,
             created_at: new Date()
            };
        return db.post(message).then(({id}) => ({
            ...message,
            id
        }));
    }

