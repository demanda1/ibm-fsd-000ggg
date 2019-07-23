const server= require('http');
//create Http server
const http=server.createServer((request,response)=>{
    if(request.url==='/'){
        response.end('Welcome to node js');
    }
    else if(request.url === '/user'){
        response.setHeader('content-type','application/json')
        response.end(JSON.stringify({
            id:1,
            name:'Bob'
        }))
    }
});
//in node we dont rquire external server

//bind to port

const port= parseInt(process.argv[2] || '1234');
http.listen(port,()=>{
    console.log(`server is started at ${port}`);
});
