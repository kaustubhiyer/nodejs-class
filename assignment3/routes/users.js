const rootPath = require('../util/path');
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'users.html'));
})

module.exports = router;