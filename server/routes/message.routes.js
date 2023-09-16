const messageControllers=require("../controllers/message.controller")


module.exports=(app)=>{
    app.get("/api",messageControllers.index)
}