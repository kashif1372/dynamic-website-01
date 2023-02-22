const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    p_c_name:{
        type:String,
        required:true
    },
    p_c_email:{
        type:String,
        required:true
    },
    p_c_comment:{
        type:String,
        required:true
    }
})

const P_C_Data = new mongoose.model("P-C-Data",userSchema);

module.exports = P_C_Data;
