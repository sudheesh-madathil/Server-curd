const mongoose = require('mongoose');

  const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
  })
  const User = mongoose.model('User', Schema);

module.exports = User;