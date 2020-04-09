import PouchDB from 'pouchdb-react-native';

let db, user,room = null;

export const chatService = {
    join
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

