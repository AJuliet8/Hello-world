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
// fetching babies from database
router.get("/babies", async(req,res)=>{
  try{
    let babie =await register.find()
    res.render("renderbabies",{babies:babies}) // to display babies from data base
  }catch(error){
    res.status(400).send("unable to find babies from database")
    console.log("unable to find babies from database")
  }

})

// delete route for form in database
router.post("/delete", async(req,res)=>{
  try{
    await application.deleteone({_id:req.body.id});
    res.redirect("back");
  }catch (error) {
    res.status(400).send("unable to delete baby from db!");
  }
});


// updating ababy in the database

router.get("/babiesupdate/:id",async(req,res)=>{
  try{
const babyupdate =await register.findOne({_id:req.params.id})
res.render("babiesupdate",{baby:babyupdate})
  } catch(error){
res,statu(400).send("unable to find baby from the db")
console.log("error finding a baby!", error);
  }
});

router.post("/babiesupdate",async(req,res)=>{
  try {
    await register.findOneAndUpdate({_id:req.query.id},req.body);
    res.redirect("/babyregistration");
  } catch (error) {
    res,statu(404).send("unable to update baby from the db");
 
  }
})


module.exports = router;