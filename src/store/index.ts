import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async getPosts() {
      const { data: posts } = await axios.get('https://gorest.co.in/public/v2/posts');
      return posts;
    }
  },
  modules: {
  },
});
