


module.exports ={
Dashboard: async (req, res) => {
    try {
        
        
       res.render('admin/dashboard', { layout: "adminlayout"})
       
    } catch (err) {
        console.log(err);
    }
},
};