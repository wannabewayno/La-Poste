module.exports = {
    routes: {
        '/api/signin':[
            ['POST','signin']
        ],
        '/api/posts':[
            ['GET','getPosts'],
        ],
        '/api/posts/:id':[
            ['GET','getPostByID']
        ],
        '/api/user':[
            ['GET','getUserByID'],
            ['POST', 'createUser'],
            ['PATCH','updateUser'],
        ]
    }
}