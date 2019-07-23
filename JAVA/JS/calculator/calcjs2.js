const express=require("express")
const server=express();
const parser=require('body-parser');

server.use(parser.json());

server.post('/index',(req,res)=>{
    res.setHeader('content-type','application/json');
    if(req.body.operand=="+"){
        res.end(JSON.stringify({
            result: parseInt(req.params.num1)+ parseInt(req.params.num2)
        }))
    }
    if(req.body.operand=="-"){
        res.end(JSON.stringify({
            result: parseInt(req.params.num1)- parseInt(req.params.num2)
        }))
    }
    if(req.body .operand=="*"){
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