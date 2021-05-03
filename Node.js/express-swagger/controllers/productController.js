const Product = require('../models/Product');

/**
 * @swagger
 * tags:
 *   name: products
 *   description: The Products managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required: [name, price]
 *       properties:
 *         _id:
 *           type: string
 *           description: The ObjectId of the product
 *         name:
 *           type: string
 *           description: The product name
 *         price:
 *           type: number
 *           description: The product price
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The product create date time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The product update date time
 *         __v:
 *           type: number
 *           description: mongoose version key
 *       example:
 *         _id: 608efeef5afc312a983fbbb7
 *         name: "洗髮精"
 *         price: 300
 *         createdAt: 2021-05-02T19:35:11.757Z
 *         updatedAt: 2021-05-02T19:35:11.757Z
 *         __v: 0
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get the product list
 *     tags: [products]
 *     responses:
 *       '200':
 *         description: The list of product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
exports.find = async (req, res) => {
  try {
    const products = await Product.find();
    return res.send({ products });
  } catch (error) {
    return res.status(500).send({ success: false, err: error.message });
  }
};

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Grt the product by id
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 608efeef5afc312a983fbbb7
 *         required: true
 *         description: The product id
 *     responses:
 *       '200':
 *         description: The product description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: The product was not found
 *       '500':
 *         description: Some server error
 */
exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) throw new Error('custom/not-found');
    return res.send({ product });
  } catch (error) {
    if (error.message === 'custom/not-found') return res.sendStatus(404);
    return res.status(500).send({ success: false, err: error.message });
  }
};

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Some server error
 */
exports.insertOne = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save();
    return res.send({ product });
  } catch (error) {
    return res.status(500).send({ success: false, err: error.message });
  }
};

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           example: 608fcaede9c0510dd403bb17
 *         required: true
 *         description: The product id
 *     responses:
 *       '200':
 *         description: The product was deleted
 *       '404':
 *         description: The product was not found
 *       '500':
 *         description: Some server error
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 刪除成功
 */
exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.deleteOne({ _id: id });
    return res.send({ message: '刪除成功' });
  } catch (error) {
    return res.status(500).send({ success: false, err: error.message });
  }
};
