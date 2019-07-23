const http = require('http');
const url = require('url');
const uservice = require('./userservice').UserServices;

const _uService = new uservice();
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    const urlParams = url.parse(req.url,true);
    console.log(urlParams);
    if(urlParams.pathname === '/login'){
        res.setHeader('content-type','application/json');
        //call user service api
        const uDetails = _uService.getUser(urlParams.query.user, urlParams.query.pass)
        console.log(uDetails);
        res.end(JSON.stringify(uDetails))
       /* if(uDetails!= undefined || uDetails != null){
            res.end(JSON.stringify(uDetails));
        }
        else{
            res.end(JSON.stringify({
                id:null,
                status:'INVALID'
            }))
        }*/
    }
})

server.listen(8080,()=>{
    console.log('Server Started at 8080');
})