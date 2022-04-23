<template>
  <div class="username-container">
    <Avatar class="avatar-icon" />
    <span class="author">John Username</span>
    <span class="posts-count">12 posts</span>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/assets/avatar.svg';

</script>

<style lang="scss" scoped>
.username-container {
  color: #DDD;
  cursor: pointer;
  width: 100%;
  display: flex;
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

.avatar-icon {
  margin-right: 18px;
}

.author {
  margin-right: 15px;
}
</style>
