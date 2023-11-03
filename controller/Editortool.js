
const Editortool = require('../models/Editor');

module.exports ={
    
    GetProductEditor:async(req,res)=>{
        try{
         
            const prodata = await Editortool.find()
            res.render('admin/Product-editor',{layout:'adminlayout',prodata})
        }catch(err){
            console.log(err);
        }
    },
    GetBlogEditor:async(req,res)=>{
        try{
         
            const blogdata = await Editortool.find()
            res.render('admin/blog-editor',{layout:'adminlayout',blogdata})
        }catch(err){
            console.log(err);
        }
    },
    GetprojectEditor:async(req,res)=>{
        try{
         
            const projectdata = await Editortool.find()
            res.render('admin/project-editor',{layout:'adminlayout',projectdata})
        }catch(err){
            console.log(err);
        }
    },
    GetServiceEditor:async(req,res)=>{
        try{
         
            const servicedata = await Editortool.find()
            res.render('admin/service-editor',{layout:'adminlayout',servicedata})
        }catch(err){
            console.log(err);
        }
    },
 
  



PostProductEditor: async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        await Editortool.findByIdAndUpdate(id, { content});
        res.redirect('/admin/');
    } catch (err) {
        console.log(err);
    }
},


// PostProductEditor: async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { content } = req.body;

//         // Create a new Editortool document with the content using a Promise
//         await Editortool.create({ content });

//         // Redirect or send a response as needed
//         res.redirect('/admin/project-editor');
//     } catch (err) {
//         console.error(err);
//         // Handle the error appropriately
//         res.status(500).send('An error occurred.');
//     }
// }
















}