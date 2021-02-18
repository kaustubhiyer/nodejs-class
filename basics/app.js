/* 
 * Imports
*/
const http = require('http');

const routes = require('./routes');

/* *
 * Basically goes over how a simple web server is built - some of it is ported to routes.js
 * http is a core module of node which lets you use http functionality to build stuff in node to run on a computer
 * createServer is a function in http that takes a callback for when a request is received and creates a web server with it.
 * This web server can be stored and then run by calling it's listen property with parameters about the host information if necessary (eg. port)
 * *
 */

const server = http.createServer(routes);


server.listen(3000);