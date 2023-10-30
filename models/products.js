const mongoose= require('mongoose')

const productsSchema = new mongoose.Schema({
  
    title:{
        type:String,
        required:true,
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
        trim:true
    },
   
});
 
const products=mongoose.model(' products', productsSchema);
module.exports=products;