const http = require('http');


http.createServer((req,resp) =>
{
resp.write("<h1>Shehar Bano, Web Developer</h1>");
resp.end();
}).listen(5500);