const express = require('express');
const CategoryService = require('./../services/category.service');
const categoryService = new CategoryService();

const router = express.Router();

router.get('/:category', (req, res) => {

    categoryService.productFilterByCategory(req.params.category, (products) => {
        res.status(200).json({
            message: 'Products retrieved successfully',
            size: products.length,
            data: products
        });
    })
});


module.exports = router;

