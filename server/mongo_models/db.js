/**
 * Created by Rahul Singh
 */

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);

mongoose.connect('mongodb+srv://rahul:sudo123@smartaudit-myv8q.mongodb.net/test?retryWrites=true', (err) => {
    if (!err) {
        console.log('MongoDb Connected to SmartAudit server!');
    }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});