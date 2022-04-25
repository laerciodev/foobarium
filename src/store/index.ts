import { createStore } from 'vuex';
import axios from '@/plugins/axios';
import { chunkArray } from '@/utils';

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
      const url = '/posts';
      const { data: posts } = await axios.get(url);
      commit('SET_POSTS', posts);
    },
    async fetchCommentsByPost({ commit }, id) {
      const url = `/posts/${id}/comments`;
      const { data: comments } = await axios.get(url);
      commit('SET_COMMENTS', comments);
    },
    async addComment({ dispatch }, payload) {
      const url = `/posts/${payload.post_id}/comments`;
      await axios.post(url, payload);
      dispatch('fetchCommentsByPost', payload.post_id)
    },
  },
  modules: {
  },
});
