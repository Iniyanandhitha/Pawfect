const express = require('express');
const cors = require('cors');
const petsRoutes = require('./routes/pets');
const errorHandler = require('./middleware/errorHandler');
const setupSwagger = require('./swagger');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true, // Allow cookies and authorization headers
}));
app.use(express.json());

// Routes
app.use('/api/pets', petsRoutes); // Example route for pets

// Swagger Documentation
setupSwagger(app);

// Error Handling Middleware (must be the last middleware)
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));