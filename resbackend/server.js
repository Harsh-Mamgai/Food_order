const http = require('http');
const app = require("./app");
const port = 5000;
const server = http.createServer(app);
server.listen(port, '127.0.0.1', ()=>{
    console.log(`Server running at ${port}`);
})