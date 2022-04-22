<template>
  <p class="username">
    <Avatar />
    <span class="author">John Username</span>
    <span class="posts-count">12 posts</span>
  </p>
</template>

<script setup lang="ts">
import Avatar from '@/assets/avatar.svg';

</script>

<style lang="scss" scoped>
.username {
  color: #DDD;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
}

.posts-count {
  font-family: 'Oxygen', sans-serif;
  text-transform: lowercase;
  font-size: 14px;
  line-height: 18px;
  color: #CCC;
}
</style>
