const fs = require('fs');
const path = require('path');

module.exports = {
    signin(req,res){
        // get username and password from front-end
        const { username, password } = req.body;
        
        // get the json database
        const users = JSON.parse(fs.readFileSync(path.resolve('./db/users.json')));
        console.log(users)
        
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
        const { username, password } = req.body;
        
        // get the json database
        const dbPath = path.resolve('./db/users.json');
        const users = JSON.parse(fs.readFileSync(dbPath));
        console.log(users)
        
        // create a new entry fot this user
        users.push({
            username,
            password
        })

        fs.writeFile(dbPath,JSON.stringify(users,null,4),err =>{
            if(err) res.status(422).json(new Error('error adding user to database'));
            res.status(200).json({message:'Success! User added to db'})
        });
    },
    updateUser(req,res){
        // your code here
    },
}