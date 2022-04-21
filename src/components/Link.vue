<template>
  <li class="link-item">
    <router-link :to="link" class="link">
      {{ value }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  value?: string,
}

const props = defineProps<Props>();
const link = computed(() => props.value !== 'posts' ? `/${props.value}` : '/' );

</script>


<style lang="scss" scoped>
.link-item {
  width: 83.833718245%;
  margin-left: auto;
  border-left: 10px solid transparent;
  padding: 14px 0;
  text-align: right;
  color: #FFF;

  &:hover {
    background: #41434B;
    border-left: 10px solid #FA00FF;

    .link {
      color: #00F0FF;
    }
  }
}

.link {
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  text-transform: uppercase;
  text-align: right;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  padding-right: 13.8568129%;
}
</style>
