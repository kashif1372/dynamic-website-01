const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://music-website-user:music-website-password@music-website-db.ids6zdu.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection successfull");
}).catch((e)=>{
    console.log("No connection" + e);
});


