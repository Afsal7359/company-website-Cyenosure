const mongoose= require('mongoose')

const serviceSchema = new mongoose.Schema({
  
    title:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    image:{
        type:String,
    },
    content: {
        type: String,
        maxlength: 2000000 
      },
   
});
 
const service=mongoose.model(' service', serviceSchema);
module.exports=service;