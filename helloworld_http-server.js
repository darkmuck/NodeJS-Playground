/* Author: William DiStefano
 * Created: Sun May 15 15:18:39 EDT 2011 @846
 * Modified:
 * File: server.js
 * Description: Server module for responding to HTTP requests
*/

var http = require("http");

http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World");
		response.end();
}).listen(8080);
