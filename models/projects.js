const mongoose= require('mongoose')

const projectsSchema = new mongoose.Schema({
  
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
        maxlength: 20000000 
      },
});
 
const projects=mongoose.model(' projects', projectsSchema);
module.exports=projects;