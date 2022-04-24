<template>
  <div @click="goToHome" class="back-button">
    <BackButtonSVG />
    Back
  </div>
  <h2 class="title">
    {{ post?.title }}
  </h2>
  <UsernamePost class="username-container" />
  <article class="article">
    {{ post?.body }}
  </article>
  <CommentPost @send-comment="$emit('send-comment', $event)" />
  <CommentsList />
</template>

<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import UsernamePost from '@/components/UsernamePost.vue';
import CommentPost from '@/components/CommentPost.vue';
import CommentsList from '@/components/CommentsList.vue';
import BackButtonSVG from '@/assets/back-button.svg';

const store = useStore();
const route = useRoute();
const router = useRouter();

const id = ref<number>();
const post = computed(() => store.getters.getPostById(id.value));

onMounted(() => { id.value = parseInt(route.params.id as string, 10) })

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
