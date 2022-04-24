<template>
  <div class="container-home">
    <Sidebar />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Sidebar from '@/components/Sidebar.vue';
import PostList from '@/views/PostList.vue';

const store = useStore();
const posts = computed(() => store.getters.getPosts);

onMounted(async () => {
  await store.dispatch('fetchPosts');
});

</script>

<style lang="scss" scoped>
.container-home {
  display: flex;
  height: 100%;
}

.main {
  width: calc(100% - 433px);
  height: 100%;
  background: #41434B;
  padding: 50px 60px 0 60px;
  overflow-y: auto;
}

</style>
