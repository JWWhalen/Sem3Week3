var http = require('http');

serveText('Hello World');

function serveText(theText) {
    http.createServer(function(req, res) {
        console.log('text was served.')
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(theText);
        res.write(', eat more by')
        res.end();
    }).listen(8080);
}