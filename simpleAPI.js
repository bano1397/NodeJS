const http = require('http'); 
const API = require('./API');
http.createServer ((req, resp)=>{ 
resp.writeHead (200, {'Content-Type': 'application\json'}); 
resp.write(JSON.stringify(API)); 
resp.end(); 
}).listen(3000); 