const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.post('/signup', (req, res) => {
    res.json('Test ok');
});

app.listen(4000);