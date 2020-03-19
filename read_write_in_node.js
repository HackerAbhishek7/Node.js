var fs = require('fs');

var r = fs.readFileSync('demo.txt','utf8');

fs.writeFileSync('demo.txt','This is writable file');  //use single quotes
console.log(r);