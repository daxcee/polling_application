var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(8080);
console.log("Polling server is running super hard");
