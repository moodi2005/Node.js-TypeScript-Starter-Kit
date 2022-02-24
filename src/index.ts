import http from'http';

const Port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World By Node");
})

server.listen(Port,()=>{
   console.log(`Server is Running To http:localhost:${Port}`)
});
