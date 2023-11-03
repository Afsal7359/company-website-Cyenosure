const mongoose = require('mongoose')


const blogsSchema = new mongoose.Schema({
  
    date:{
        type:String,
      
        trim:true
    },
    author:{
        type:String,
       
        trim:true
    },
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
 
const blogs=mongoose.model(' blogs', blogsSchema);
module.exports=blogs;