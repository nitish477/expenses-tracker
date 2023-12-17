import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"]
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please enter your email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6
    }
},
{
    timestamps:true
})

const User = model('User',userSchema)

export default User;