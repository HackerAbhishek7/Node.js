var express = require('express');

var exp = express();

exp.get('/home',function(request,response)
{
    response.send('this is homepage');
});

exp.get('/aboutus',function(request,response)
{
    response.send('this is about us page');
});

exp.get('/blog/:id',function(request,response)
{
    // response.send('this is blog : ' + request.params.id);
        response.render('blog');
});
exp.listen(5000,'127.0.0.1');