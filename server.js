const dotenv = require('dotenv').config();
// dotenv.config({path: '.env'});
const express = require('express')
const todoRoutes = require('./routes/todos')
const http = require('http');
const logger = require('./middleware/logger')
const morgan = require('morgan');

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
    
app.use('/api/v1/todos',todoRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port : ${PORT} in environment : ${process.env.NODE_ENV}`));
