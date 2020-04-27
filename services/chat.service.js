import PouchDB from 'pouchdb-react-native';

const REMOTE_DB = 'http://gathor.org:5984/';

let db, currentUser, currentroom, sync = null;

export const chatService = {
    join,
    sendMessage,
    listMessages
}

    function join(user, room, onSync, onFail){
        if(/^_/.test(room)){
            onFail('Le nom du salon ne peut pas commencer par "_"');
        }
        currentUser = user || 'Anonymous';
        currentroom = room.toLowerCase() || 'général';
        db = new PouchDB(currentroom);

 //       return db.allDocs({
 //           include_docs: true,
 //       }).then(response =>
 //          response.rows
 //           .map(row => row.doc)
 //           .sort((a,b) => a.created_at > b.created_at)
 //           );
            sync = db.sync(`${REMOTE_DB}/${currentroom}`, {
                live: true,
                retry: true,
                continuous: true
            });
            sync.on('change', handleChange(onSync));
            sync.on('error', handleError(onFail));
            return listMessages();
        }

    function listMessages() {
        return db.allDocs({
            include_docs: true,
        }).then(response => {
           return response.rows
            .map(row => row.doc)
            .sort((a,b) => a.created_at > b.created_at)
        });
    }    

    function handleChange(callback){
        return change => {
            console.log('change', change);
            callback(change);
        }
    }    

    function handleError(callabck){
        return error => {
            callabck(error);
        }
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

