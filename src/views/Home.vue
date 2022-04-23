<template>
  <div class="container-home">
    <Sidebar />
    <Suspense>
      <PostList />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import PostList from '@/views/PostList.vue';

</script>

<style lang="scss" scoped>
.container-home {
  display: flex;
  height: 100%;
}
</style>
