const EventEmitter = require('events').EventEmitter;
const emitter = new EventEmitter();

class Listener{
    _execute(request){
        let _request=JSON.parse(request);
        let legs=parseInt(_request.legs)
        let wings=_request.wings
        let tail=_request.tail
        let age=_request.age
        if(legs>=2 && tail=="y"){
            console.log("animal")
        }
        else if(wings=="y"){
            console.log("bird")
        }
        else if(legs<=2){
            if(age>=18){
                console.log("Adult")
            }
            else
            console.log("juvenile")
        }
    }
}

const listen=new Listener();
emitter.addListener('listen',listen._execute)
module.exports={
    emitter
}