const emitter = require('./check').emitter;
let _legs= process.argv[2]
let _wings=process.argv[3]
let _tail=process.argv[4]
let _age=process.argv[5]
emitter.emit('listen',JSON.stringify({
    legs: _legs,
    wings: _wings,
    tail: _tail,
    age: _age
}))