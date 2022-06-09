const dotenv = require('dotenv').config();
// dotenv.config({path: '.env'});
const express = require('express')
const todoRoutes = require('./routes/todos')
const http = require('http');

const app = express();
app.use('/api/v1/todos',todoRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port : ${PORT} in environment : ${process.env.NODE_ENV}`));


// const server = http.createServer((req,res) => {
//     res.setHeader('Content-Type', 'Application/json');
//     res.setHeader('X-Powered-By', 'Node.js')
//     res.end(JSON.stringify({
//         sucess: true,
//         data: todos
//     }));
// });
// // const PORT = 5000;
// server.listen(PORT, () =>{console.log('Server is running on port :' + PORT )
// console.log(process.env.S3_BUCKET)})