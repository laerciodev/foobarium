<template>
  <div class="container-home">
    <Sidebar />
    <router-view></router-view>
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
</style>
