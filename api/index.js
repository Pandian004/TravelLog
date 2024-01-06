const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json('Test ok5');
});

app.listen(4000);