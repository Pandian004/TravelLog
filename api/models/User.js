const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    // userName: {type:String, unique:true, min:4},
    name: {type:String, required:true},
    username: {type:String, required:true, unique:true, min:4},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    profilePic: {type:String},
    aboutMe: {type:String}
})

const UserModel = model('User', UserSchema);

module.exports = UserModel;

