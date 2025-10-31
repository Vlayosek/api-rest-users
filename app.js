const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
//const bodyParser = require('body-parser');
app.use(cors());

// Middleware to parse JSON bodies
//app.use(bodyParser.json());
// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
