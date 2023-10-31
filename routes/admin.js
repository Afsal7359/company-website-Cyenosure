var express = require('express');
const admincontroller = require('../controller/admincontroller');
const adminpanel = require('../controller/adminpanel');
const upload = require('../util/multer');
const contact = require('../controller/contact');
const adminauth = require('../middlewears/Adminauth');
var router = express.Router();


router.get('/',adminauth.adminauth,admincontroller.Dashboard);
router.post('/login',admincontroller.PostLogin);
router.get('/login',admincontroller.GetLogin);
router.get('/logout',adminauth.adminauth,admincontroller.AdminLogout)


router.get('/projects',adminpanel.GetProject);
router.post('/addprojects', upload.single('image'), adminpanel.AddProject);
router.post('/editprojects/:id',upload.single('image'),adminpanel.updateProject)
router.get('/deleteprojects/:id',adminpanel.DeleteProject);

router.get('/clients',adminpanel.GetClients);
router.post('/addclients',upload.single('image'),adminpanel.AddClients);
router.post('/editclients/:id',upload.single('image'),adminpanel.updateClient);
router.get('/deleteclients/:id',adminpanel.DeleteClients);

router.get('/blogs',adminpanel.GetBlog);
router.post('/addblogs',upload.single('image'),adminpanel.AddBlog);
router.post('/editblogs/:id',upload.single('image'),adminpanel.updateBlog);
router.get('/deleteblogs/:id',adminpanel.DeleteBlog);

router.get('/contact',adminpanel.GetContact);
router.post('/contact-form',contact.AddContact);
router.get('/deletecontacts/:id',adminpanel.DeleteContact);

router.get('/products',adminpanel.GetProducts);
router.post('/addproducts',upload.single('image'),adminpanel.AddProducts);
router.post('/editproducts/:id',upload.single('image'),adminpanel.updateProducts);
router.get('/deleteproducts/:id',adminpanel.DeleteProduct);

router.get('/service',adminpanel.GetService);
router.post('/addservice',upload.single('image'),adminpanel.AddService);
router.post('/editservice/:id',upload.single('image'),adminpanel.UpdateService);
router.get('/deleteservice/:id',adminpanel.DeleteService);



module.exports = router;
