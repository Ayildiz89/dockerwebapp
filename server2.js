var http=require('http');
function benimFonksiyonum(requiest,response) {
console.log(requiest)
response.writeHeader(200,{'Context-Type':'text-plain'});
response.write('<html><body><h1>Kod Denemeleri</h1></body></html>');
response.end();
}
http.createServer(benimFonksiyonum).listen(8005);
console.log('Sunucu Calisiyor');

