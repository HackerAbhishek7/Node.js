var http = require('http');  //aquiring http services
var fs = require('fs');
var server = http.createServer(function(request,response){
                                                             //making http request response type server 
    response.writeHead(200,{'Content-Type':'application/json'});
    // response.end(index.html);
    var obj = {
        name: "Abhishek",
        city: "sasaram"
    };
    response.end(JSON.stringify(obj)); //json needs to be converted into string parametre
})

server.listen(3000,'127.0.0.1');