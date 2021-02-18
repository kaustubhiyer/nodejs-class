const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("I'll always be here.");
    res.send('<h1>Henlo</h1>');
});

app.listen(3000);