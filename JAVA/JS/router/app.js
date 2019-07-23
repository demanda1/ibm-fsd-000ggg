const express=require("express");
const serv=express();
const parser=require('body-parser')
const cors=require('cors')

const empservices=require('./apis/employee').server
const stuservices=require('./apis/student').server

serv.use(parser.json())
serv.use(cors())

serv.get('/status',(req,res)=>{
        res.end(JSON.stringify({
            messsage: "Server is running"
        }))
})

serv.use('/employee',empservices)
serv.use('/student',stuservices)

serv.listen(1234,()=>{
    console.log("Server started at port 1234")
})