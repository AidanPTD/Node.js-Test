const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const express = require('express');
const app = new express();
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => console.log("Example app listening on port 3000!"))
console.log("http://"+hostname+":"+port)
