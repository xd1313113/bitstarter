#!/usr/bin/env node
var express = require('express');

var fs = require('fs');

var index_file = fs.readFileSync('index.html');

var buffer = new Buffer(index_file);

var app = express.createServer(express.logger());

app.get('/', function(request, response){
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on " + port);
});

