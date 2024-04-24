const mongoose = require("mongoose");
const passportlocalMongoose = require("passport-local-mongoose");

const registerSchema =new mongoose.Schema({
    name:{

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

role:{
    type:String,
    trim:true
},


})

registerSchema.plugin(passportlocalMongoose,{
    usernameField:"email"
});

module.exports=mongoose.model("/register", registerSchema)