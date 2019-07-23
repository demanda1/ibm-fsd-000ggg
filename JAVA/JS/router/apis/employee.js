const server=require("express").Router()
const empservices=require("../services/employee").empServices
const emp=new empservices()

server.get('/',(req,res)=>{
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify({
        details:emp.all()
    }))
})

server.post('/add',(req,res)=>{
    res.setHeader("constent-type","application/json")
    res.end(JSON.stringify({
        details:emp.add(req.body)
    }))
})

module.exports.server=server