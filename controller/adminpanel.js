
const blogs = require('../models/blogs');
const clients = require('../models/clients');
const contact = require('../models/contact');
const products = require('../models/products');
const projects = require('../models/projects');
const service = require('../models/service');




module.exports={


   


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


   
        



      


      
      
  

   

  
   

      
  

       
    
    
};