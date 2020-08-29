
export default {
    getPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
    },
    authenticateUser(formData){
        return fetch('/api/signin',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'POST',
            mode:'cors',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .catch(error => error)
    },
    createUser(formData){
        return fetch('/api/user',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'POST',
            mode:'cors',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
    },
    updateUser(formData){
        return fetch('/api/user',{
            headers:{
                'Content-Type':'application/json',
                'accept':'application/json',
            },
            method:'PATCH',
            mode:'cors',
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
    }
}