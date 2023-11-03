var express = require('express');
const admincontroller = require('../controller/admincontroller');
const adminpanel = require('../controller/adminpanel');
const upload = require('../util/multer');
const contact = require('../controller/contact');
const adminauth = require('../middlewears/Adminauth');
const Editortool = require('../controller/Editortool');
const blog = require('../controller/blog');
const Product = require('../controller/Product');
const Project = require('../controller/Project');
const service = require('../controller/service');
var router = express.Router();


router.get('/',adminauth.adminauth,admincontroller.Dashboard);
router.post('/login',admincontroller.PostLogin);
router.get('/login',admincontroller.GetLogin);
router.get('/logout',adminauth.adminauth,admincontroller.AdminLogout)


router.get('/projects',adminauth.adminauth, Project.GetProject);
router.post('/addprojects',adminauth.adminauth, upload.single('image'), Project.AddProject);
router.post('/editprojects/:id',adminauth.adminauth,upload.single('image'),Project.updateProject)
router.get('/deleteprojects/:id',adminauth.adminauth,Project.DeleteProject);
router.get('/project/:id',adminauth.adminauth,Project.GetProjectEditor);
router.post('/addprojecteditor/:id',adminauth.adminauth,Project.PostDetailProject);

router.get('/clients',adminauth.adminauth,adminpanel.GetClients);
router.post('/addclients',adminauth.adminauth,upload.single('image'),adminpanel.AddClients);
router.post('/editclients/:id',adminauth.adminauth,upload.single('image'),adminpanel.updateClient);
router.get('/deleteclients/:id',adminauth.adminauth,adminpanel.DeleteClients);

router.get('/blogs',adminauth.adminauth,blog.GetBlog);
router.post('/addblogs',adminauth.adminauth,upload.single('image'),blog.AddBlog);
router.post('/editblogs/:id',adminauth.adminauth,upload.single('image'),blog.updateBlog);
router.get('/deleteblogs/:id',adminauth.adminauth,blog.DeleteBlog);
router.get('/blog/:id',adminauth.adminauth,blog.GetBlogEditor);
router.post('/addblogeditor/:id',adminauth.adminauth,blog.AddBlogEditor);

router.get('/contact',adminauth.adminauth,adminpanel.GetContact);
router.post('/contact-form',contact.AddContact);
router.get('/deletecontacts/:id',adminauth.adminauth,adminpanel.DeleteContact);

router.get('/products',adminauth.adminauth,Product.GetProducts);
router.post('/addproducts',adminauth.adminauth,upload.single('image'),Product.AddProducts);
router.post('/editproducts/:id',adminauth.adminauth,upload.single('image'),Product.updateProducts);
router.get('/deleteproducts/:id',adminauth.adminauth,Product.DeleteProduct);
router.get('/product/:id',adminauth.adminauth,Product.GetProductEditor);
router.post('/addproducteditor/:id',adminauth.adminauth,Product.PostDetaiProducts);


router.get('/service',adminauth.adminauth,service.GetService);
router.post('/addservice',adminauth.adminauth,upload.single('image'),service.AddService);
router.post('/editservice/:id',adminauth.adminauth,upload.single('image'),service.UpdateService);
router.get('/deleteservice/:id',adminauth.adminauth,service.DeleteService);
router.get('/service/:id',adminauth.adminauth,service.GetServicepageEditor);
router.post('/addserviceeditor/:id',adminauth.adminauth,service.PostDetailService);

router.get('/product-editor',adminauth.adminauth,Editortool.GetProductEditor);
router.get('/blog-editor',adminauth.adminauth,Editortool.GetBlogEditor);
router.get('/project-editor',adminauth.adminauth,Editortool.GetprojectEditor);
router.get('/service-editor',adminauth.adminauth,Editortool.GetServiceEditor);



router.post('/updateproduct-content/:id',adminauth.adminauth,Editortool.PostProductEditor);

module.exports = router;
