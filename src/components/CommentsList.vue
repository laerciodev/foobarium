<template>
  <div class="comments-title">Comments</div>
  <p v-if="comments.length > 0">has comments</p>
  <p v-else class="empty-comments-message">No comments</p>
</template>

<script setup lang="ts">
import { Comment } from '@/types';

interface Props {
  comments: Array<Comment>
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.comments-title {
  margin-top: 70px;
  text-transform: uppercase;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  border-bottom: 1px solid #FFF;
  padding-bottom: 14px;
}

.empty-comments-message {
  text-align: center;
  padding: 20px 0;
  color: #FFF;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
}
</style>
