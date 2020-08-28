
module.exports = {
    getPosts(req,res){
        // your code here
        fetch('https://jsonplaceholder.typicode.com/posts',{
            headers:{
            'Content-Type':'application/json',
            'accept':'application/json',
        },
        method:'GET',
        mode:'cors',
        })
        .then(response => res.json(response))
        .catch(error => error.response)
    },
    getPostByID(req,res){
        // your code here
    },
}