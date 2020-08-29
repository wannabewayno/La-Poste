const fs = require('fs');
const path = require('path');

module.exports = {
    signin(req,res){
        // get username and password from front-end
        const { username, password } = req.body;
        
        // get the json database
        const db = JSON.parse(fs.readFileSync(path.resolve('./db/users.json')));
        console.log(db);

        // get users from the database
        const { users } = db;
        
        const user = users.find(user => user.username === username);

        if(user){ // if user exists check that the password matches
            if(user.password === password) {
                res.status(200).json({message:'authenticated'}) // authenticated
            } else {
                res.status(503).json(new Error('Incorrect Password'))
            }
        } else { // else send back 503 error
            res.status(404).json(new Error('Username not found'));
        }
    },
    getUserByID(req,res){
        // your code here
    },
    createUser(req,res){
        // get username and password from front-end
        const { username, password, confirmPassword } = req.body;
        
        // get the json database
        const db = JSON.parse(fs.readFileSync(path.resolve('./db/users.json')));
        console.log(db);

        // get users from the database
        const { users } = db;
        
        const user = users.find(user => user.username === username);

        if(user){ // if user exists check that the password matches
            if(user.password === password) {
                res.status(200).json({message:'authenticated'}) // authenticated
            } else {
                res.status(503).json(new Error('Incorrect Password'))
            }
        } else { // else send back 503 error
            res.status(404).json(new Error('Username not found'));
        }
    },
    updateUser(req,res){
        // your code here
    },
}