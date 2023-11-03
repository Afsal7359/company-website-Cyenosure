const mongoose= require('mongoose')

const productsSchema = new mongoose.Schema({
  
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
        trim:true
    },
    content: {
        type: String,
        maxlength: 20000000 
      },
   
});
 
const products=mongoose.model(' products', productsSchema);
module.exports=products;