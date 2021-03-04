const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin')
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', {prods: products, pageTitle: 'My Shop', path: '/', notempty: products.length > 0 })
});

module.exports = router;