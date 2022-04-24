import { createStore } from 'vuex';
import axios from 'axios';
import { chunkArray } from '@/utils';

const BASE_URL = 'https://gorest.co.in/public/v2';
const TOKEN = '0b8d4c47d78dbdcfcc1b84d457da0bc61e958e39dac4a182e5c230a57f9ce227';

export default createStore({
  state: {
    posts: [],
    comments: []
  },
  mutations: {
    SET_POSTS: (state, payload) => state.posts = payload,
    SET_COMMENTS: (state, payload) => state.comments = payload,
  },
  getters: {
    getPosts: (state) => chunkArray(state.posts, 3),
    getPostById: (state) => (id) => state.posts.find(
      post => post.id === id
    ),
    getComments: (state) => state.comments,
  },
  actions: {
    async fetchPosts({ commit }) {
      const url = `${BASE_URL}/posts`;
      const { data: posts } = await axios.get(url);
      commit('SET_POSTS', posts);
    },
    async fetchCommentsByPost({ commit }, id) {
      const url = `${BASE_URL}/posts/${id}/comments`;
      const headers = {
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/json',
        'Content-type': 'application/json'
      };
      const { data: comments } = await axios.get(url, { headers });
      commit('SET_COMMENTS', comments);
    },
    async addComment(payload) {
      const url = `${BASE_URL}/posts/${payload.post_id}/comments`;
      const headers = {
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/json',
        'Content-type': 'application/json'
      };
      await axios.post(url, payload, { headers });
    },
  },
  modules: {
  },
});
