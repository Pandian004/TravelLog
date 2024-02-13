const express = require('express');
const cors = require('cors');
const  mongoose  = require('mongoose');
const app = express();
const User = require('./models/User');

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
    const UserDoc = await User.create({name,username,email,password});
    res.json(UserDoc);
   }
   catch(e){
    res.status(400).json(e);
   }
});


app.listen(4000);
//39Y6du6G17JdD5as

// mongodb+srv://travellog:39Y6du6G17JdD5as@cluster0.l6tif6p.mongodb.net/?retryWrites=true&w=majority

