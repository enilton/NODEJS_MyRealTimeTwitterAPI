const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//real time
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb://goweek:goweek123@ds049997.mlab.com:49997/goweek-backend",
{
    useNewUrlParser: true
});


//criar middleware  para realtime
app.use((req,res,next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

//alterar para server.listen
server.listen(3000, () => {
    console.log(' :) Server started on port 3000');
})