<template>
  <div class="container-home">
    <Sidebar />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar'

export default defineComponent({
  components: {
    Sidebar
  },
  setup() {

  },
})
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
