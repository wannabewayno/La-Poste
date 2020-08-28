export default {
    getPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
    }
}