const express = require('express');
const cors = require('cors');
const app = express();


// ENV
require('dotenv').config();
const PORT = process.env.PORT || 5000;


// CORS: only allow your live frontend
app.use(cors({
origin: [
'https://novahiringsolutions.com',
'https://www.novahiringsolutions.com'
],
credentials: true,
}));


app.use(express.json());


// Example health
app.get('/health', (req, res) => res.json({ ok: true }));


// ... your routes


app.listen(PORT, () => console.log(`API listening on ${PORT}`));