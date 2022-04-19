<template>
  <div>
    <LogoSVG />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoSVG from '@/assets/logo.svg';

export default defineComponent({
  components: {
    LogoSVG,
  },
});
</script>
