const mongoose = require("mongoose");

module.exports.chain = mongoose.model("block",new mongoose.Schema({
    data:{
        from:String,
        to:String,
        asset:String,
        quants:Number,
        quality:Boolean
       },
       previousHash:String,
       hash:String,
       timestamp:String,
       index:Number
}));