<template>
  <div class="container-home">
    <Sidebar />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar'

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
}
</style>
