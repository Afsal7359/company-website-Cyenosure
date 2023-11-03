const service = require("../models/service");

module.exports={

    
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
PostDetailService: async (req, res) => {
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
GetServicepageEditor:async(req,res)=>{
    try{
        const {id}= req.params;
        const data= await service.findById({_id:id})
        res.render('admin/Detail-service-Editor',{layout:'adminlayout',data})
    }catch(err){
        console.log(err);
    }
},

}