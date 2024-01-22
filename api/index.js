const express = require('express');
const cors = require('cors');
const  mongoose  = require('mongoose');
const app = express();
const User = require('./models/User');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://travellog:hrXDjQckHE4cFVBH@cluster0.2kvasoc.mongodb.net/?retryWrites=true&w=majority");

app.post('/signup', async (req, res) => {
    const{name,email, password} = req.body;
   try{
    const UserDoc = await User.create({name,email,password});
    res.json(UserDoc);
   }
   catch(e){
    res.status(400).json(e);
   }
});

app.listen(4000);
//hrXDjQckHE4cFVBH

// mongodb+srv://travellog:hrXDjQckHE4cFVBH@cluster0.2kvasoc.mongodb.net/?retryWrites=true&w=majority