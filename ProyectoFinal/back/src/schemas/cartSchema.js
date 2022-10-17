import mongoose from "mongoose";

let cartItemSchema;
export default cartItemSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productos',
    },
    quantity:{type: Number, require: true, trim: true}
});

