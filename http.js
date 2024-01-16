var http = require('http');

//serveText('Hello World');
serveHtml('<body> <h1>Hello World from HTML</h1> <p>This is the HTML part of the response</p></body>');

function serveText(theText) {
    http.createServer(function(req, res) {
        console.log('text was served.')
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(theText);
        res.write(', eat more by')
        res.end();
    }).listen(8080);
}

function serveHtml(theHtml) {
    http.createServer(function(req, res) {
        console.log('html was served.')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(theHtml);
        res.write('This is the HTML part of the ')
        res.end();
    }).listen(8080);
}