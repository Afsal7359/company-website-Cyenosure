const mongoose= require('mongoose')

const projectsSchema = new mongoose.Schema({
  
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
 
const projects=mongoose.model(' projects', projectsSchema);
module.exports=projects;