const mongoose= require('mongoose')

const serviceSchema = new mongoose.Schema({
  
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        require:true,
        trim:true
    },
    image:{
        type:String,
        require:true,
    }
   
});
 
const service=mongoose.model(' service', serviceSchema);
module.exports=service;