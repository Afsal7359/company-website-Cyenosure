var express = require('express');
const usercontroller = require('../controller/usercontroller');
var router = express.Router();

/* GET users listing. */

router.get('/',usercontroller.GetHomepage);
router.get('/detailproject/:id',usercontroller.GetDetailedProject);
router.get('/about',usercontroller.GetAboutpage);
router.get('/services', usercontroller.GetServicepage);
router.get('/projects',usercontroller.GetProjectpage);
router.get('/blogs', usercontroller.GetBlogpage);
router.get('/blogdetails/:id',usercontroller.GetDetailedblog);
router.get('/products', usercontroller.GetProductpage);
router.get('/productdetails/:id', usercontroller.GetDetailedproduct);
router.get('/contacts', usercontroller.GetContactpage)



router.get('/detail', function(req, res, next) {
  res.render('user/project-detail-page')
});


module.exports = router;
