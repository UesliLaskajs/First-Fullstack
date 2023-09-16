const message=require("mongoose")

module.exports.index=(req,res)=>{
    res.json({message:"Hello World"})
};


