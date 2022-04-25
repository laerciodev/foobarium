<template>
  <HeaderMobile />
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
import HeaderMobile from '@/components/HeaderMobile.vue'

const store = useStore();

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
  background: #41434B;
  padding: 50px 60px 0 60px;
  overflow-y: auto;

  @media(max-width: 768px) {
    width: 100%;
    padding: 38px 32px 0 48px;
  }
}

</style>
