const mongoose = require("mongoose");
const {Schema} = mongoose
const UserSChema = new Schema({
    name:{
        type: String,
        required: true,
        // minLength: "The name must have 3 character",
        // maxLength: "The name must have 30 character"
    },
    email:{
        type:String,
        required: true,
        unique:true
    },

    password:{
        type:String,
        required: true,
    },

    date:{
        type:Date,
        default: Date.now
    },
})
const User = mongoose.model("user", UserSChema); 

module.exports = User;

