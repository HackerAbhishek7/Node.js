var event = require('events');   //package that conatins events

var emmiter = new event.EventEmitter();   //creating a new events works as constructor

emmiter.on('publishVideo',function(msg)  //activating the emitter
{
    console.log(msg);
})

emmiter.emit('publishVideo',"Abc Uploaded a new video");  //emitting a new emmiteer