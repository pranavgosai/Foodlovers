const mongoose = require("mongoose");

const FoodloverSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Number:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    persons:{
        type:String,
        require:true
    },
    dates:{
        type:String,
        require:true
    }
  });


  const Register = new mongoose.model("Register",FoodloverSchema);
  module.exports = Register;