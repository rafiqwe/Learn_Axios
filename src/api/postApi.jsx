import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
})

// get method to fetch posts
export const getPosts = () => {
    return api.get('/posts');

}
// delete method to delete posts
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}
// post method to create posts
export const createPost = (data) => {
    return api.post('/posts', data);
}