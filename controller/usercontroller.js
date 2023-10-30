const blogs = require("../models/blogs");
const clients = require("../models/clients");
const products = require("../models/products");
const projects = require("../models/projects");


module.exports={

    GetHomepage:async(req,res)=>{
        try{
            const projectdata= await projects.find()
            const clientdatas = await clients.find()
            res.render('user/home', { projectdata,clientdatas });
        }catch(err){
            console.log(err);
        }
    },
    GetDetailedProject:async(req,res)=>{
        try{
            const {id} = req.params;
            const Projectdetails=await projects.findById(id)
            res.render('user/project-detail-page' ,{Projectdetails})
        }catch(err){
            console.log(err);
        }
    },
    GetAboutpage:async(req,res)=>{
        try{
            
            const clientdatas=await clients.find()
            res.render('user/about' ,{clientdatas})
            console.log(clientdatas);
        }catch(err){
            console.log(err);
        }
    },

    GetServicepage:async(req,res)=>{
        try{
           
            const clientdatas=await clients.find()
            res.render('user/services' ,{clientdatas})
            console.log(clientdatas);
        }catch(err){
            console.log(err);
        }
    },
    GetProjectpage:async(req,res)=>{
        try{
          
            const clientdatas=await clients.find()
            const projectdata=await projects.find()
            res.render('user/projects' ,{clientdatas,projectdata})
          
        }catch(err){
            console.log(err);
        }
    },
    GetBlogpage:async(req,res)=>{
        try{
           
           
            const blogdata=await blogs.find()
            res.render('user/blogs' ,{blogdata})
            
        }catch(err){
            console.log(err);
        }
    },
    GetDetailedblog:async(req,res)=>{
        try{
            const {id} = req.params;
            const blogdetails=await blogs.findById(id)
            res.render('user/blog-detail-page' ,{blogdetails})
        }catch(err){
            console.log(err);
        }
    },
    GetProductpage:async(req,res)=>{
        try{
           
           
            const productdata=await products.find()
            res.render('user/products' ,{productdata})
           
        }catch(err){
            console.log(err);
        }
    },
    GetContactpage:async(req,res)=>{
        try{
          
            const clientdatas=await clients.find()
            
            res.render('user/projects' ,{clientdatas})
          
        }catch(err){
            console.log(err);
        }
    },
    GetDetailedproduct:async(req,res)=>{
        try{
            const {id} = req.params;
            const productdetail=await products.findById(id)
            res.render('user/product-detail-page' ,{productdetail})
        }catch(err){
            console.log(err);
        }
    },

}