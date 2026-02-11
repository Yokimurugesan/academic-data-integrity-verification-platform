const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const pool = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const protectedRoutes = require('./routes/protectedRoutes');




// Middleware
app.use(cors());
app.use(express.json()); // replaces body-parser
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/users', userRoutes); //  BEFORE listen
app.use('/api', protectedRoutes);
// Test route
app.get('/', (req, res) => res.send('Server running'));

// Test DB connection route
app.get('/test-db', (req, res) => {
  pool.query('SELECT NOW() AS now', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ serverTime: results[0].now });
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
