<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
.title {
  margin: 30px 0;
  color: #fff;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: -0.1em;
  font-style: bold;
}
</style>
