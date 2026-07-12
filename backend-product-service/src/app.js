const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);
app.get('/health', (req, res) => res.status(200).json({ status: 'healthy' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));