const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.get('/health', (req, res) => res.status(200).json({ status: 'healthy' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));