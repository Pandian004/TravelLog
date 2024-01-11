const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/signup', (req, res) => {
    // const name = JSON.parse(req.body.name);
    // const email = req.body.email;
    // const password = req.body.password;
    // res.json(
    //     `Name:${name} 
    //      Email:${email} 
    //      Password:${password}`
    // );
    // res.json(`Email:${email}`);
    // res.json(`Password:${password}`);
    res.json(req.body);
});

app.listen(4000);