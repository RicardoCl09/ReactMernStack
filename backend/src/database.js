const mongoose = require('mongoose');

// console.log(process.env.MONGODB_URI)
const uri = process.env.MONGODB_URI 
            ? process.env.MONGODB_URI 
            : 'mongodb://127.0.0.1:27017/databasetest';

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});