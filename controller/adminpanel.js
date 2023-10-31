
const blogs = require('../models/blogs');
const clients = require('../models/clients');
const contact = require('../models/contact');
const products = require('../models/products');
const projects = require('../models/projects');
const service = require('../models/service');




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
   


    GetClients:async(req,res)=>{
        try{
           const data = await clients.find()
            res.render('admin/clients', { layout: "adminlayout",data})
        }
        catch(err){
            console.log(err);
        }
    },

    AddClients: async (req, res) => {
        try {
          if (req.file) {
            const { name } = req.body;
            const imageurl = `/image/${req.file.filename}`;
      
            await clients.create({ name, image: imageurl });
          } else {
            console.log("No file uploaded.");
          }
      
          console.log("Client Added ...");
          res.redirect('/admin/clients');
        } catch (err) {
          console.log(err);
        }
      },
   updateClient : async (req, res) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
    
            let imageurl = null;
    
            if (req.file) {
                imageurl = `/image/${req.file.filename}`;
            }
  
            const updatedFields = {};
    
            if (name) {
                updatedFields.name = name;
            }
    
            if (imageurl) {
                updatedFields.image = imageurl;
            }
    
            const updatedClient = await clients.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            if (updatedClient) {
                console.log("Client updated successfully.");
                res.redirect('/admin/clients');
            } else {
                console.log("Client not found or not updated.");
                res.redirect('/admin/clients'); // You might want to handle this differently
            }
        } catch (err) {
            console.error(err);
            // Handle the error in a way that makes sense for your application
        }
    },
    DeleteClients:async(req,res)=>{
        try{
            const {id}=req.params;
            await clients.findByIdAndDelete({_id:id});
            console.log(' project Deleted Sucessfully');
            res.redirect('/admin/clients')
        }catch(err){
            console.log(err)
        }
    },
   

    
    GetBlog:async(req,res)=>{
        try{
           const data = await blogs.find()
            res.render('admin/blog', { layout: "adminlayout",data})
            console.log(data);
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
      
            await blogs.create({ date,author,title,description, image: imageurl });
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
            const {date,author, title,description } = req.body;
    
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

    GetContact:async(req,res)=>{
        try{
            const data = await contact.find()
            res.render('admin/contact',{layout:'adminlayout',data})
        }catch(err){
            console.log(err);
        }
    },
    DeleteContact:async(req,res)=>{
        try{
            const {id}=req.params;
            await contact.findByIdAndDelete({_id:id});
            console.log(' contact Deleted Sucessfully');
            res.redirect('/admin/contact')
        }catch(err){
            console.log(err)
        }
    },

    GetProducts:async(req,res)=>{
        try{
            const data=await products.find();
            res.render('admin/products',{layout:'adminlayout',data})
        }catch(err){
            console.log(err);
        }
    },

   
    AddProducts: async (req, res) => {
        try {
          if (req.file) {
            const { title,description } = req.body;
            const imageurl = `/image/${req.file.filename}`;
      
            await products.create({ title,description, image: imageurl });
          } else {
            console.log("No file uploaded.");
          }
      
          console.log("products Added ...");
          res.redirect('/admin/products');
        } catch (err) {
          console.log(err);
        }
      },
      updateProducts : async (req, res) => {
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
    
            const updatedproducts = await products.findOneAndUpdate(
                { _id: id },
                { $set: updatedFields },
                { new: true }
            );
    
            if (updatedproducts) {
                console.log("products updated successfully.");
                res.redirect('/admin/products');
            } else {
                console.log("products not found or not updated.");
                res.redirect('/admin/products');
            }
        } catch (err) {
            console.error(err);
        }
    },

DeleteProduct:async(req,res)=>{
    try{
        const {id}=req.params;
        await products.findByIdAndDelete({_id:id});
        console.log(' Products Deleted Sucessfully');
        res.redirect('/admin/products')
    }catch(err){
        console.log(err)
    }
},

GetService:async(req,res)=>{
    try{
        const data = await service.find()
        res.render('admin/service',{ layout:"adminlayout", data})
    }catch(err){
        console.log(err);
    }
},
AddService: async (req, res) => {
    try {
        if (req.file) {
          const { title,description } = req.body;
          const imageurl = `/image/${req.file.filename}`;
    
          await service.create({ title,description, image: imageurl });
        } else {
          console.log("No file uploaded.");
        }
    
        console.log("service Added ...");
        res.redirect('/admin/service');
      } catch (err) {
        console.log(err);
      }
    },

  UpdateService: async (req, res) => {
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

        const updatedservice = await service.findOneAndUpdate(
            { _id: id },
            { $set: updatedFields },
            { new: true }
        );

        if (updatedservice) {
            console.log("service updated successfully.");
            res.redirect('/admin/service');
        } else {
            console.log("service not found or not updated.");
            res.redirect('/admin/service');
        }
    } catch (err) {
        console.error(err);
    }
},

DeleteService:async(req,res)=>{
    try{
        const {id}=req.params;
        await service.findByIdAndDelete({_id:id});
        console.log(' service Deleted Sucessfully');
        res.redirect('/admin/service')
    }catch(err){
        console.log(err)
    }
},

      


      
      
  

   

  
   

      
  

       
    
    
};