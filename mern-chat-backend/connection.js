const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://chattyve:RDsHuZ3cRqrdMk4a@cluster0.zaszawu.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
