var fs = require('fs');

var readStream = fs.createReadStream(__dirname +'/demo.txt');

readStream.on('data',function(d){
    console.log('this is  a writable '+ d);
})

