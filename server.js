const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors()); // Add this line
app.use(bodyParser.json());

// Sample data
let sharedData = { message: 'Hello from the server!' };

// Endpoint to get data
app.get('/api/data', (req, res) => {
    res.json(sharedData);
});

// Endpoint to update data
app.post('/api/data', (req, res) => {
    sharedData = req.body;
    res.json({ message: 'Data updated successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
