import { createStore } from 'vuex';
import axios from 'axios';
import { chunkArray } from '@/utils';

const BASE_URL = 'https://gorest.co.in/public/v2';

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
  },
  modules: {
  },
});
