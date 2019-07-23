const express=require('express')
const server=express();

server.get('/index/:num1/:num2/:operand', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    console.log("enntered")
    res.setHeader('content-type','application/json')
    if(req.params.operand=="+"){
        res.end(JSON.stringify({
            result: parseInt(req.params.num1)+ parseInt(req.params.num2)
        }))
    }
    if(req.params.operand=="-"){
        res.end(JSON.stringify({
            result: parseInt(req.params.num1)- parseInt(req.params.num2)
        }))
    }
    if(req.params.operand=="*"){
        res.end(JSON.stringify({
            result: parseInt(req.params.num1)* parseInt(req.params.num2)
        }))
    }
    if(req.params.operand=="/"){
        res.end(JSON.stringify({
            result: parseInt(req.params.num1)/ parseInt(req.params.num2)
        }))
    }
    
})

server.listen(8080,()=>{
    console.log("Server started at port 8080")
})