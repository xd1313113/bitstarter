#!/usr/bin/env node
var express = require('express');

var fs = require('fs');

var index_file = fs.readFileSync('bit/index.html');

var buffer = new Buffer(index_file);

var app = express.createServer(express.logger());

app.get('/', function(request, response){
    response.send(buffer.toString());
});

var port = process.env.PORT ||8080;
app.listen(port, function(){
    console.log("Listening on " + port);
});

