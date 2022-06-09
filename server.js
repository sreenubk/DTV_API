const dotenv = require('dotenv').config();
// dotenv.config({path: '.env'});
const express = require('express')
const todoRoutes = require('./routes/todos')
const http = require('http');

const app = express();

const logger = (req,res,next) =>{
    req.hello = 'This is middle world'
    console.log('middle ware ran');
    next();
}
app.use(logger)
app.use('/api/v1/todos',todoRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port : ${PORT} in environment : ${process.env.NODE_ENV}`));
