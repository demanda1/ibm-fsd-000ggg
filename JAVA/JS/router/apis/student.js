const server=require("express").Router()
const stuservices=require("../services/student").studentServices
const stu=new stuservices()

server.get('/',(req,res)=>{
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify({
        details:stu.all()
    }))
})

server.post('/add',(req,res)=>{
    res.setHeader("constent-type","application/json")
    res.end(JSON.stringify({
        details:stu.add(req.body)
    }))
})

module.exports.server=server