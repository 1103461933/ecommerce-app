const express = require('express');
const cors = require('cors');
const gatewayRoutes = require('./routes/gatewayRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', gatewayRoutes);
app.get('/health', (req, res) => res.status(200).json({ status: 'healthy' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));