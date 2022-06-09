const mongoose = require('mongoose');

const mongoConnection = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true,
        // useCreateIndex : true,
        // useFindAndModify : false
    });
    console.log(`Mongo connected to : ${connection.connection.host}`);
};
module.exports = mongoConnection;