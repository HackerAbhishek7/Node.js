var http = require('http');  //aquiring http services

var server = http.createServer(function(request,response){
                                                             //making http request response type server 
    response.writeHead(200,{'Content-Type':'Text/plain'});
    response.end("Helllow I AM SERVER!!");
})

server.listen(3000,'127.0.0.1');