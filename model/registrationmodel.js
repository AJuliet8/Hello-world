const mongoose = require("mongoose");
const passportlocalMongoose = require("passport-local-mongoose");

const adminregistrationSchema =new mongoose.Schema({
    Fullname:{

        type:String,
            trim:true
        },
email:{
     type:String,
    trim:true

},

password:{
    type:String,
    trim:true

},
Confirmpassword:{
    type:String,
    trim:true

},
roll:{
    type:String,
    trim:true
},


})

adminregistrationSchema.plugin(passportlocalMongoose,{
    usernameField:"email"
});

module.exports=mongoose.model("/adminregistration", adminregistrationSchema)