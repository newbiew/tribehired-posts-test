// import axios from 'axios';

import axios from "axios";


const state = {
    posts: [],
    post: []
};

const getters = {
    allPosts: state => state.posts,
    postDetail: state => state.post
};

const actions = {

    async fetchPosts({commit}){
        const response =  await axios.get("https://jsonplaceholder.typicode.com/posts");
        commit('setPosts', response.data)
    },

    async getPost({commit}, id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('setPost', response.data)
    } 


};

const mutations = {
    setPosts: (state,posts) => (state.posts = posts),
    setPost: (state,post) => (state.post = post)

};


export default {
    state,
    getters,
    actions,
    mutations
};