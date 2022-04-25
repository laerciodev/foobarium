<template>
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import PostItem from '@/components/PostItem.vue';
import { Post } from '@/types';

const store = useStore();
const posts = computed(() => store.getters.getPosts);

</script>
<style lang="scss" scoped>
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

  @media(max-width: 768px) {
    margin: 38px 0;
  }
}
</style>
