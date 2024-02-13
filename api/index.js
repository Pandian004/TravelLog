const express = require('express');
const cors = require('cors');
const  mongoose  = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();
const User = require('./models/User');

const salt = bcrypt.genSaltSync(10);

app.use(express.json());
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

mongoose.connect("mongodb+srv://travellog:39Y6du6G17JdD5as@cluster0.l6tif6p.mongodb.net/?retryWrites=true&w=majority");

app.post('/signup', async (req, res) => {
    const{name,username, email, password} = req.body;
   try{
    const UserDoc = await User.create({
        name,
        username,
        email,
        password:bcrypt.hashSync(password, salt)
    });
    res.json(UserDoc);
   }
   catch(e){
    res.status(400).json(e);
   }
});

app.post('/login', async(req, res) => {
    const{username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);

    res.json(passOk);
    console.log(passOk);
})


app.listen(4000);
//39Y6du6G17JdD5as

// mongodb+srv://travellog:39Y6du6G17JdD5as@cluster0.l6tif6p.mongodb.net/?retryWrites=true&w=majority

