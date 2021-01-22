import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const postUrl = `${baseUrl}/posts`;

export const fetchPosts = () => axios.get(postUrl);
export const createPost = newPost => axios.post(postUrl, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${postUrl}/${id}`, updatedPost);
export const deletePost = id => axios.delete(`${postUrl}/${id}`);
export const likePost = id => axios.patch(`${postUrl}/${id}/likePost`);

export const signIn = formData =>
  axios.post(`${baseUrl}/user/signin`, formData);
export const signUp = formData =>
  axios.post(`${baseUrl}/user/signup`, formData);
 
