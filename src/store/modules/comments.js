// import axios from 'axios';

import axios from "axios";


const state = {
    comments: [],
};

const getters = {
    showComments: state => state.comments,
};

const actions = {

    async fetchComments({commit}, id){
        const response =  await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        commit('setComments', response.data)
    },
    searchComments({commit}, keyword){
        commit('filteredComments', keyword);
    }

};

const mutations = {
    setComments: (state,comments) => (state.comments = comments),
    filteredComments: (state, keyword) => (state.comments = state.comments.filter(item => {
        return item.body.match(keyword);
    }))
};


export default {
    state,
    getters,
    actions,
    mutations
};