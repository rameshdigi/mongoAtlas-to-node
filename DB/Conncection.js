const mongoose = require('mongoose');

const URI = "mongodb+srv://rameshdigi:Prakash_2008@mongodb01-crebt.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;