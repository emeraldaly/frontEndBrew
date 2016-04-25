var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    trim: true
  }, 
  lastName:{
    type: String,
    required: true,
    trim: true
  }, 
  email:{
    type: String,
    required: true,
    trim: true
  }, 
  password:{
    type: String,
    required: true
  }, 
  age:{
    type: Number,
    required: true
  } 
});

var User = mongoose.model('User', userSchema);