const express = require("express");
const bp = require("body-parser");
const app = express();

require("morgan")("dev");
app.use(bp.json());
app.use(bp.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.send("HEllo world");
});


app.post("/",(req,res)=>{
    res.send({
        message:"This is the body",
        body:req.body
    });
});


server = app.listen(process.env.PORT || 3000,()=>console.log(`Listening on port ${server.address().port}`))