<template>
  <div class="post-item-container">
    <UsernamePost />
    <TitlePost :title="post.title" />
    <ArticlePost />
    <CommentsCountPost />
  </div>
</template>

<script setup lang="ts">
import UsernamePost from '@/components/UsernamePost.vue';
import TitlePost from '@/components/TitlePost.vue';
import ArticlePost from '@/components/ArticlePost.vue';
import CommentsCountPost from '@/components/CommentsCountPost.vue';
import { Post } from '@/types';

const props = defineProps<{
  post: Post,
  index?: number,
}>();

</script>

<style lang="scss" scoped>
.post-item-container {
  width: 240px;
  flex-grow: 1;
  min-width: 25%;
  background: #61646D;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 23px 30px 24px 30px;
}
</style>
