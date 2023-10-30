const mongoose = require('mongoose')


const blogsSchema = new mongoose.Schema({
  
    date:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true
    },
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
        required:true,
    },
});
 
const blogs=mongoose.model(' blogs', blogsSchema);
module.exports=blogs;