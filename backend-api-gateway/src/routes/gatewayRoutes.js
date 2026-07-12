const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const userService = require('../services/userServiceClient');
const productService = require('../services/productServiceClient');

const router = express.Router();

// Usuarios
router.post('/users/register', async (req, res) => {
  try {
    const response = await userService.register(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const response = await userService.login(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

router.get('/users/profile', authMiddleware, async (req, res) => {
  try {
    const response = await userService.getProfile(req.user.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

// Productos
router.get('/products', async (req, res) => {
  try {
    const response = await productService.getProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const response = await productService.getProductById(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

router.post('/products', authMiddleware, async (req, res) => {
  try {
    const response = await productService.createProduct(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

module.exports = router;