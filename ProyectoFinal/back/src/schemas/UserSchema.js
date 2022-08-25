import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cartItemSchema from './cartSchema.js'

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true,
    },
    nombre:{
        type: String,
        require: true,
        trim: true
    },
    telefono:{
        type: String,
        require: true,
        trim: true
    },
    mensaje:{
        type: String,
        require: true,
        trim: true
    },
    photo:{
        type: String,
        require: true,
        trim: true
    },
    cart:[cartItemSchema]

});

userSchema.pre('save', async function(){
    const user = this;
    if(user.isModified('password')){  user.password =  bcrypt.hash(user.password, 12); }
});

const User = mongoose.models.user ||mongoose.model('user', userSchema);
export default User;