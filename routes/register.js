const express = require("express");
const router = express.Router();

// import model
const register = require("../model/register");

router.get("/babyregistration", (req, res) => {
  res.render("babyregistration");

});


router.post("/Baby-registration ", async (req, res) => {
  try {
    const baby = new register(req.body);
    console.log(user);
   await baby.save();
    res.send("Baby-registered successfully")
    
  } catch (error) {
    res.status(400).send("Sorry, error occurred, baby not registered")
    console.log("Error registering baby", error)
    
  }
 
});





module.exports = router;