const mongoose= require('mongoose')

const clientsSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:true,
        trim:true
    },
   
    image:{
        type:String,
        required:true,
    },
});
 
const clients=mongoose.model(' clients', clientsSchema);
module.exports=clients;