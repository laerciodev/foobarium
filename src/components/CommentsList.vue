<template>
  <div class="comments-title">Comments</div>
  <CommentItem
    v-for="comment in comments"
    :comment="comment"
    :key="comment.id"
  />
</template>

<script setup lang="ts">
import CommentItem from '@/components/CommentItem';
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
