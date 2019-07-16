const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

const message=(_msg)=>{
    console.log(_msg);
}

emitter.addListener('sayHelloListener',message);
emitter.once('messageListener',message);
emitter.emit('sayHelloListener',"Hello world")