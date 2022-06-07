const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    productService.getAll((products) => {
        res.status(200).json(products);
    });
});


module.exports = router;

