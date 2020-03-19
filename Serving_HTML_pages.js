var http = require('http');  //aquiring http services
var fs = require('fs');
var server = http.createServer(function(request,response){
                                                             //making http request response type server 
    response.writeHead(200,{'Content-Type':'Text/html'});
    // response.end(index.html);
    var readStream = fs.createReadStream(__dirname+'/index.html');
    readStream.pipe(response);  //for direct binding use pipe();
})

server.listen(3000,'127.0.0.1');