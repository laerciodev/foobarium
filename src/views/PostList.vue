<template>
  <main class="main">
    <h2 class="title">posts</h2>
    <div class="posts-container">
      <div class="chunk-posts-container"
        v-for="(chunkPosts, index) in posts"
        :key="index"
      >
        <PostItem
          v-for="post in chunkPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import PostItem from '@/components/PostItem.vue';
import { Post } from '@/types';

const store = useStore();
const data = await store.dispatch('getPosts');
const posts = ref<Array<Post>>([]);

const chunkSize = 3;
for(let i = 0; i < data.length; i += chunkSize) {
	posts.value.push(data.slice(i, i + chunkSize))
}

</script>
<style lang="scss" scoped>
.main {
  width: calc(100% - 433px);
  height: 100%;
  background: #41434B;
  padding: 50px 60px 0 60px;
  overflow-y: auto;
}

.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
}

.posts-container {
  display: flex;
  flex-direction: column;
}

.chunk-posts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin: 50px 0;
}
</style>
