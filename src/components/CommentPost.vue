<template>
  <div class="textarea-container">
    <div class="textarea-title">Make a comment</div>
    <textarea
      placeholder="Type here"
      class="textarea"
      id=""
      cols="30"
      rows="1"
      v-model="comment"
      ></textarea>
  </div>
  <div class="username-button-container">
    <UsernamePost :isYou="true" />
    <button
      :class="['send-button', isEmptyComment && 'disabled']"
      @click="sendComment">
      send
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import UsernamePost from '@/components/UsernamePost.vue';

const comment = ref<string>('')
const isEmptyComment = computed(() => comment.value === '')

const emit = defineEmits(['send-comment'])

function sendComment() {
  if (isEmptyComment.value) return;
  emit('send-comment', comment.value);
}

</script>

<style lang="scss" scoped>
.textarea-container {
  margin-top: 60px;
}

.textarea-title {
  color: #FFF;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.textarea {
  background: rgba(255, 255, 255, 0.1);
  color:  rgba(255, 255, 255, 0.25);
  border: 1px solid #747784;
  border-radius: 5px;
  padding: 15px 0 20px 25px;
  width: calc(100% - 25px);
  font-size: 18px;
  font-family: 'Oxygen', sans-serif;
  font-weight: 400;
  line-height: 23px;
}

.username-button-container {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.send-button {
  background: #00F0FF;
  color: #FFF;
  padding: 8px 18px;
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  border-radius: 5px;
  line-height: 21px;
  border: none;
  cursor: pointer;

  &.disabled {
    background: #545760;
    color: rgba(255, 255, 255, 0.25);
    cursor: not-allowed;
  }
}
</style>
