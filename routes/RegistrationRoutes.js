const express = require("express");
const router = express.Router();

// import model
const Registration = require("../model/registrationmodel");

 router.get("/adminregistration", (req, res) => {
   res.render("adminregistration");

 });
// ``

router.post("/adminregistration", async (req, res) => {
    try {
      const user= new Registration(req.body);
      console.log(user);
     await Registration.register(user,req.body.password,(err) =>{
        if(err){
            throw err
        }
        res.redirect("/adminregistration")
    })
} catch (err) {
    res.status(400).send("user not adminregistration")
    console.log(error)
}
    
     });
     
     
  
  
  
  module.exports = router