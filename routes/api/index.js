const { api:{ signin, getUserByID, createUser, updateUser, } } = require('../../controllers')
const router = require('express').Router();

// Matches with /api/signin 
router
    .route('/signin')
    .post(signin) 

// posts routes 
router.use('/posts', require('./posts.routes')); 

// Matches with /api/user 
router
    .route('/user')
    .get(getUserByID) 
    .post(createUser) 
    .patch(updateUser) 

module.exports = router;