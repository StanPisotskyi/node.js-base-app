const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

const port = 3000;
const path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

router.get('/', function(req, res){
    res.sendFile(path + 'index.html');
});

router.get('/ping', function(req, res){
    mongoose.connect('mongodb://127.0.0.1:27017/docker-test')
        .then(() => {
            res.status(200).send(JSON.stringify({status: 'Connected to mongodb!', error: null}));
        })
        .catch(error => {
            res.status(500).send(JSON.stringify({status: 'Error', error: error}));
        });
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});