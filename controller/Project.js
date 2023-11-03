const projects = require("../models/projects");

module.exports={

    GetProject:async(req,res)=>{
        try{
           const data = await projects.find()
            res.render('admin/projects', { layout: "adminlayout",data})
            console.log(data);
        }
        catch(err){
            console.log(err);
        }
    },

    AddProject: async (req, res) => {
        try {
          if (req.file) {
            const { title,description } = req.body;
            const imageurl = `/image/${req.file.filename}`;
      
            await projects.create({ title,description, image: imageurl });
          } else {
            console.log("No file uploaded.");
          }
      
          console.log("projects Added ...");
          res.redirect('/admin/projects');
        } catch (err) {
          console.log(err);
        }
      },
   updateProject : async (req, res) => {
        try {
            const { id } = req.params;
            const { title,description } = req.body;
    
            let imageurl = null;
    
            if (req.file) {
                imageurl = `/image/${req.file.filename}`;
            }
  
            const updatedFields = {};
    
            if (title) {
                updatedFields.title = title;
            }
            if (description) {
                updatedFields.description = description;
            }
    
            if (imageurl) {
                updatedFields.image = imageurl;
            }
    
            const updatedProject = await projects.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            if (updatedProject) {
                console.log("product updated successfully.");
                res.redirect('/admin/projects');
            } else {
                console.log("product not found or not updated.");
                res.redirect('/admin/projects');
            }
        } catch (err) {
            console.error(err);
        }
    },
    DeleteProject:async(req,res)=>{
        try{
            const {id}=req.params;
            await projects.findByIdAndDelete({_id:id});
            console.log(' project Deleted Sucessfully');
            res.redirect('/admin/projects')
        }catch(err){
            console.log(err)
        }
    },
    PostDetailProject : async (req, res) => {
        try {
            const { id } = req.params;
            const { title,description,content } = req.body;
    
            let imageurl = null;
    
            if (req.file) {
                imageurl = `/image/${req.file.filename}`;
            }
  
            const updatedFields = {};
    
            if (title) {
                updatedFields.title = title;
            }
            if (description) {
                updatedFields.description = description;
            }
    
            if (imageurl) {
                updatedFields.image = imageurl;
            }
            if (content) {
                updatedFields.content = content;
            }
            const updatedProject = await projects.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            if (updatedProject) {
                console.log("product updated successfully.");
                res.redirect('/admin/projects');
            } else {
                console.log("product not found or not updated.");
                res.redirect('/admin/projects');
            }
        } catch (err) {
            console.error(err);
        }
    },
    GetProjectEditor:async(req,res)=>{
        try{
            const {id}= req.params;
            const data= await projects.findById({_id:id})
            res.render('admin/Detail-project-Editor',{layout:'adminlayout',data})
        }catch(err){
            console.log(err);
        }
    },
 
}