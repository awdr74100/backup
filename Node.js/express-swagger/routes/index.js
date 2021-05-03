const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router.get('/products', productController.find);
router.get('/products/:id', productController.findById);
router.post('/products', productController.insertOne);
router.delete('/products/:id', productController.deleteById);

module.exports = router;
