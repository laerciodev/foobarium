<template>
  <h2 class="title">posts</h2>
  <ul class="post-list-container">
    <Post />
    <Post />
  </ul>
</template>

<script setup lang="ts">
import Post from '@/components/Post.vue'

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

.post-list-container {
  display: flex;
  justify-content: space-between;
  gap: 62px;
  margin-top: 48px;
}
</style>
