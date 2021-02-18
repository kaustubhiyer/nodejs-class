/* 
 * Imports
*/
const http = require('http');
const fs = require('fs');

/* *
 * Basically goes over how a simple web server is built
 * http is a core module of node which lets you use http functionality to build stuff in node to run on a computer
 * createServer is a function in http that takes a callback for when a request is received and creates a web server with it.
 * This web server can be stored and then run by calling it's listen property with parameters about the host information if necessary (eg. port)
 * *
 */

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type=text name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // console.log(parsedBody);
            // writefilesync blocks code till file is created
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, {
                    'Location': '/'
                });
                return res.end();
            });
        });
    }
    // process.exit(); -> kills this process
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>My first page</title></head>');
    // res.write('<body>Hello from my first server</body>');
    // res.write('</html>');
    // res.end();
});


server.listen(3000);