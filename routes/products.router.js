const express = require('express');

const ProductService = require('./../services/product.service');
const productService = new ProductService();

const router = express.Router();

router.get('/', (req, res) => {
    productService.getAll((products) => {
        res.status(200).json({
            message: 'Products retrieved successfully',
            size: products.length,
            data:products
        });
    });
});

router.get('/search/:search', (req, res) => {
    const search = req.params.search;
    productService.search(search, (products) => {
        res.status(200).json({
            message: 'Products retrieved successfully',
            size: products.length,
            data:products
        });
    });
});


module.exports = router;

