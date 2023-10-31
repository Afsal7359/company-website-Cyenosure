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


router.get('/projects',adminauth.adminauth, adminpanel.GetProject);
router.post('/addprojects',adminauth.adminauth, upload.single('image'), adminpanel.AddProject);
router.post('/editprojects/:id',adminauth.adminauth,upload.single('image'),adminpanel.updateProject)
router.get('/deleteprojects/:id',adminauth.adminauth,adminpanel.DeleteProject);

router.get('/clients',adminauth.adminauth,adminpanel.GetClients);
router.post('/addclients',adminauth.adminauth,upload.single('image'),adminpanel.AddClients);
router.post('/editclients/:id',adminauth.adminauth,upload.single('image'),adminpanel.updateClient);
router.get('/deleteclients/:id',adminauth.adminauth,adminpanel.DeleteClients);

router.get('/blogs',adminauth.adminauth,adminpanel.GetBlog);
router.post('/addblogs',adminauth.adminauth,upload.single('image'),adminpanel.AddBlog);
router.post('/editblogs/:id',adminauth.adminauth,upload.single('image'),adminpanel.updateBlog);
router.get('/deleteblogs/:id',adminauth.adminauth,adminpanel.DeleteBlog);

router.get('/contact',adminauth.adminauth,adminpanel.GetContact);
router.post('/contact-form',contact.AddContact);
router.get('/deletecontacts/:id',adminauth.adminauth,adminpanel.DeleteContact);

router.get('/products',adminauth.adminauth,adminpanel.GetProducts);
router.post('/addproducts',adminauth.adminauth,upload.single('image'),adminpanel.AddProducts);
router.post('/editproducts/:id',adminauth.adminauth,upload.single('image'),adminpanel.updateProducts);
router.get('/deleteproducts/:id',adminauth.adminauth,adminpanel.DeleteProduct);

router.get('/service',adminauth.adminauth,adminpanel.GetService);
router.post('/addservice',adminauth.adminauth,upload.single('image'),adminpanel.AddService);
router.post('/editservice/:id',adminauth.adminauth,upload.single('image'),adminpanel.UpdateService);
router.get('/deleteservice/:id',adminauth.adminauth,adminpanel.DeleteService);



module.exports = router;
