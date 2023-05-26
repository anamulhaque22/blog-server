const express = require('express');
const router = express.Router();
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
const UsersController = require('../controllers/users/UsersController');
const BlogsController = require('../controllers/blogs/BlogsController');


// User Profile Routes 
router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.profileDetails);

// Blogs Routes
router.post("/createBlog",AuthVerifyMiddleware,BlogsController.createBlog);
router.get("/blogList/:pageNo/:perPage/:search",BlogsController.blogList);
router.get("/updateBlog/:id",AuthVerifyMiddleware,BlogsController.updateBlog);
router.get("/deleteBlog/:id",AuthVerifyMiddleware,BlogsController.deleteBlog);


module.exports = router;