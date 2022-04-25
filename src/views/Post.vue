<template>
  <div @click="goToHome" class="back-button">
    <BackButtonIcon width="16px" height="16px" />
    Back
  </div>
  <h2 class="title">
    {{ post?.title }}
  </h2>
  <UsernamePost class="username-container" />
  <article class="article">
    {{ post?.body }}
  </article>
  <CommentPost @send-comment="sendComment" />
  <CommentsList :comments="comments" />
</template>

<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import UsernamePost from '@/components/UsernamePost.vue';
import CommentPost from '@/components/CommentPost.vue';
import CommentsList from '@/components/CommentsList.vue';
import BackButtonIcon from '@/components/BackButtonIcon.vue';

const store = useStore();
const route = useRoute();
const router = useRouter();

const id = ref<number>();
const post = computed(() => store.getters.getPostById(id.value));
const comments = computed(() => store.getters.getComments)

function sendComment(comment: string) {
  const payload = {
    post_id: id.value,
    name: 'Vimala Iyengar LLD',
    email: 'vimala_iyengar_lld@zboncak.net',
    body: comment
    };
  store.dispatch('addComment', payload)
}

function setId() {
  id.value = parseInt(route.params.id as string, 10);
}

onMounted(async () => {
  setId();
  await store.dispatch('fetchCommentsByPost', id.value);
})

function goToHome() {
  router.push('/')
}

</script>

<style lang="scss" scoped>
.back-button {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
}

.title {
  border-top: 1px solid #FFF;
  border-bottom: 1px solid #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 36px;
  line-height: 34px;
  font-weight: 700;
  color: #FFF;
  text-transform: uppercase;
  padding-top: 38px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    padding-top: 0;
    border-top-width: 0;
  }
}

.username-container {
  margin-top: 43px;
  margin-bottom: 30px;
}

.article {
  font-family: 'Oxygen', sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  color: #FFF;
}
</style>
