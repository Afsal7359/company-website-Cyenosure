const Editortool = require("../models/Editor");
const blogs = require("../models/blogs");
const clients = require("../models/clients");
const products = require("../models/products");
const projects = require("../models/projects");
const service = require("../models/service");


module.exports={

    GetHomepage:async(req,res)=>{
        try{
            const servicedata= await service.find()
            const projectdata= await projects.find()
            const clientdatas = await clients.find()
            res.render('user/home', { projectdata,clientdatas,servicedata });
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
            const editordata =  await Editortool.find()
           const servicedata = await service.find()
            const clientdatas=await clients.find()
            res.render('user/services' ,{clientdatas,servicedata,editordata})
        }catch(err){
            console.log(err);
        }
    },
    GetProjectpage:async(req,res)=>{
        try{
            const editordata =  await Editortool.find()
            const clientdatas=await clients.find()
            const projectdata=await projects.find()
            res.render('user/projects' ,{clientdatas,projectdata,editordata})
          
        }catch(err){
            console.log(err);
        }
    },
    GetBlogpage:async(req,res)=>{
        try{
        const {id} = '654339fa4438b27b36da7c46'
           const editordata = await Editortool.findById(id)
        
            const blogdata=await blogs.find()
            res.render('user/blogs' ,{blogdata,editordata})
            
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
           
            const editordata =  await Editortool.find()
            const productdata=await products.find()
            res.render('user/products' ,{productdata,editordata})
           
        }catch(err){                           
            console.log(err);
        }
    },
    GetContactpage:async(req,res)=>{
        try{
           
            const clientdatas=await clients.find()
            
            res.render('user/contact' ,{clientdatas})
          
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
    GetDetailedService:async(req,res)=>{
        try{
            
            const {id} = req.params;
            const servicedetail=await service.findById(id)
            res.render('user/service-detail-page' ,{servicedetail})
        }catch(err){
            console.log(err);
        }
    },

}