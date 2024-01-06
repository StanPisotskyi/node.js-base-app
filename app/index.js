const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

const port = 3000;
const path = __dirname + '/views/';

mongoose.connect('mongodb://mongouser:password@mongo:27017/nodejs-base-build-db')
    .then(() => console.log('Connected to mongodb!'))
    .catch(error => console.log(error));

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res){
    res.sendFile(path + 'index.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});