const mongoose = require("mongoose");
const passportlocalMongoose = require("passport-local-mongoose");

const adminregistrationSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },

  role: {
    type: String,
    trim: true
  }
});

adminregistrationSchema.plugin(passportlocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("Registration", adminregistrationSchema);
