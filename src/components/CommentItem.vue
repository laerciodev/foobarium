<template>
  <div class="comment-item-container">
    <AvatarIcon />
    <div class="author-comment-container">
      <p><span class="author">{{ comment?.name }}</span> says:</p>
      <p class="comment">{{ comment?.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarIcon from '@/components/AvatarIcon';
import { Comment } from '@/types';

interface Props {
  comment: Comment
}

defineProps<Props>();
</script>

<style scoped>
.comment-item-container {
  display: flex;
  margin: 40px 0;
  cursor: pointer;
}

.author-comment-container {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
}

.author {
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.comment {
  color: #EEE;
  font-family: 'Oxygen', sans-serif;
  font-weight: 400;
}
</style>
