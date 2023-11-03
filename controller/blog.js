const blogs = require("../models/blogs");

module.exports={

    GetBlog:async(req,res)=>{
        try{
           const data = await blogs.find()
            res.render('admin/blog', { layout: "adminlayout",data})
           
        }
        catch(err){
            console.log(err);
        }
    },

    AddBlog: async (req, res) => {
        try {
          if (req.file) {
            const {date,author, title,description } = req.body;
            const imageurl = `/image/${req.file.filename}`;
      
            await blogs.create({ date,author,title,description, imagefield: imageurl});
          } else {
            console.log("No file uploaded.");
          }
      
          console.log("blogs Added ...");
          res.redirect('/admin/blogs');
        } catch (err) {
          console.log(err);
        }
      },
     
   updateBlog : async (req, res) => {
        try {
            const { id } = req.params;
            const {date,author, title,description,content } = req.body;
    
            let imageurl = null;
    
            if (req.file) {
                imageurl = `/image/${req.file.filename}`;
            }
  
            const updatedFields = {};
    
            if (date) {
                updatedFields.date = date;
            }
            if (author) {
                updatedFields.author = author;
            }
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
    
            const updatedblog = await blogs.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            if (updatedblog) {
                console.log("blog updated successfully.");
                res.redirect('/admin/blogs');
            } else {
                console.log("blog not found or not updated.");
                res.redirect('/admin/blogs');
            }
        } catch (err) {
            console.error(err);
        }
    },
    DeleteBlog:async(req,res)=>{
        try{
            const {id}=req.params;
            await blogs.findByIdAndDelete({_id:id});
            console.log(' blog Deleted Sucessfully');
            res.redirect('/admin/blogs')
        }catch(err){
            console.log(err)
        }
    },
  

    GetBlogEditor:async(req,res)=>{
        try{
            const {id}= req.params;
            const data= await blogs.findById({_id:id})
            res.render('admin/Detail-blog-Editor',{layout:'adminlayout',data})
        }catch(err){
            console.log(err);
        }
    },
    AddBlogEditor:async(req,res)=>{
        try {
            
            const { id } = req.params;
            console.log(id);
            const {date,author, title,description,content } = req.body;

            let imageurl = null;

            if (req.file) {
                imageurl = `/image/${req.file.filename}`;
            }

            const updatedFields = {};

            if (date) {
                updatedFields.date = date;
            }
            if (author) {
                updatedFields.author = author;
            }
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

            const updatedblog = await blogs.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );

            if (updatedblog) {
                console.log("text Editor successfully.");
                res.redirect('/admin/blogs');
            } else {
                console.log("blog not found or not updated.");
                res.redirect('/admin/blogs');
            }
        } 
        catch(err){
            console.log(err);
        }
    },


}