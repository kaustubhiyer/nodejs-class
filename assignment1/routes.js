const users = []

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><head><title>First Assignment</title></head>');
        res.write('<body><H1>Hello, welcome to userbase</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add user</button></form></body></html>');
        return res.end();
    } else if (url === '/users') {
        console.log(users);
        res.write('<html><head><title>First Assignment</title></head>');
        res.write('<body><h1>Users in system:</h1>');
        res.write('<ul>');
        for(let user of users) {
            res.write((`<li>${user}`));
        }
        res.write('</ul></body></html>');
        return res.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', ((chunk) => {
            body.push(chunk);
        }));
        return req.on('end', () => {
            res.writeHead('302', headers= {
                'Location': '/',
            });
            const response = Buffer.concat(body).toString();
            const user = response.split('=')[1];
            users.push(user);
            console.log(`Pushed new user: ${user} to users.`);
            return res.end();
        })
    }
}



module.exports = {
    handler: requestHandler,
};