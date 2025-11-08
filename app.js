import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import dbConnect from './config/mongo.js';

import routes from './routes/index.js';

// Connect to MongoDB
dbConnect();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;