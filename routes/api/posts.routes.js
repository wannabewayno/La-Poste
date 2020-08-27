const { posts:{ getPosts, getPostByID, } } = require('../../controllers')
const router = require('express').Router();

// Matches with /api/posts 
router
    .route('/')
    .get(getPosts) 

// Matches with /api/posts/:id 
router
    .route('/:id')
    .get(getPostByID) 

module.exports = router;