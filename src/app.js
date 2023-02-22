const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const hbs = require("hbs");


app.use(express.static(path.join(__dirname,"../public")));
app.set("view engine","hbs");


require("./db/conn");
const Data = require("./models/model01");
const P_C_Data = require("./models/model02");
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    // res.send("Hello World...!");
    res.render("index");
});


app.post("/contact", async (req,res)=>{
    try {
        const userData = new Data({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message
        });

        const savedData = await userData.save();
        res.status(201).render("index");


    } catch (error) {
        res.status(404).send(error);
    }
})


app.post("/blog", async (req,res)=>{
    try {
        const p_c_userData = new P_C_Data({
            p_c_name:req.body.p_c_name,
            p_c_email:req.body.p_c_email,
            p_c_comment:req.body.p_c_comment
        });

        const p_c_savedData = await p_c_userData.save();
        res.status(201).render("index");


    } catch (error) {
        res.status(404).send(error);
    }
})





app.listen(port,()=>{
    console.log(`Server is listening on port no ${port}.`);
})