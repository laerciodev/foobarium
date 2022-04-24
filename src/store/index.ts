import { createStore } from 'vuex';
import axios from 'axios';
import { chunkArray } from '@/utils';

const BASE_URL = 'https://gorest.co.in/public/v2';
const TOKEN = '0b8d4c47d78dbdcfcc1b84d457da0bc61e958e39dac4a182e5c230a57f9ce227';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    SET_POSTS: (state, payload) => state.posts = payload
  },
  getters: {
    getPosts: (state) => chunkArray(state.posts, 3),
    getPostById: (state) => (id) => state.posts.find(
      post => post.id === id
    )
  },
  actions: {
    async fetchPosts({ commit, dispatch }) {
      const url = `${BASE_URL}/posts`;
      const { data: posts } = await axios.get(url);
      commit('SET_POSTS', posts);
    },
    async addComment({ dispatch }, payload) {
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
