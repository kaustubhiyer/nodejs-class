const express = require('express');

const app = express();


// Handler for /users
app.use('/users', (req, res, next) => {
    return res.send('<h1>Dummy response for users</h1>');
})

// Handler for /
app.use('/', (req, res, next) => {
    return res.send('<h1>Dummy response for home</h1');
})

// app.use('/', (req, res, next) => {
//     console.log("This is function 1");
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log("This is function 2");
//     return res.send('<h1>MY CODE WORKS TYVM</h1>');
// });

app.listen(3000);