const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true , "First Name is required" ]
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:[true , "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
    password:{
        type:String,
        required : [true,"Password is Required"],
        minlenght : [6 , "Password must be at least 8 characters long"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at : {
        type : Date,
        default : Date.now
    }
});


const usermodel = mongoose.model('users',UserSchema)
module.exports = usermodel