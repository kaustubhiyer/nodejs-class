const fs = require('fs');

const requestHandler = (req, res) => {
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
}

module.exports = {
    handler: requestHandler
};