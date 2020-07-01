'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

var http=require('http');
function benimFonksiyonum(requiest,response) {
console.log(requiest)
response.writeHeader(200,{'Context-Type':'text-plain'});
response.write('<html><body><h1>Kod Denemeleri</h1></body></html>');
response.end();
}
http.createServer(benimFonksiyonum).listen(8002);
console.log('Sunucu Calisiyor');

