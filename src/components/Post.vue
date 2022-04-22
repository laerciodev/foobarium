<template>
  <li class="container-post">
    <UsernamePost />
    <TitlePost />
    <ArticlePost />
    <CommentsCountPost />
  </li>
</template>

<script setup lang="ts">
import UsernamePost from '@/components/UsernamePost.vue';
import TitlePost from '@/components/TitlePost.vue';
import ArticlePost from '@/components/ArticlePost.vue';
import CommentsCountPost from '@/components/CommentsCountPost.vue';

</script>


<style lang="scss" scoped>
.container-post {
  width: 100%;
  max-width: 413px;
  background: #61646D;
  border-radius: 15px;
  padding: 24px 30px 54px 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
</style>
