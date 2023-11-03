const products = require("../models/products");

module.exports={

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
    GetProductEditor:async(req,res)=>{
        try{
            const {id}= req.params;
            const data= await products.findById({_id:id})
            res.render('admin/Detail-product-Editor',{layout:'adminlayout',data})
        }catch(err){
            console.log(err);
        }
    },
    PostDetaiProducts : async (req, res) => {
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
    
}