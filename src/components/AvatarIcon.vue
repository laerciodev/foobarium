<template>
  <svg :width="width" :height="height" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="20" fill="#00F0FF" />
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M13.8461 13.8462C13.8461 10.4462 16.6 7.69231 20 7.69231C23.4 7.69231 26.1538 10.4462 26.1538 13.8462C26.1538 17.2462 23.4 20 20 20C16.6 20 13.8461 17.2462 13.8461 13.8462Z"
    fill="white" />
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M7.69232 35.7657V27.6923C7.69232 23.6 15.8923 21.5385 20 21.5385C24.1077 21.5385 32.3077 23.6 32.3077 27.6923V35.7656C28.9139 38.4188 24.6416 40 19.9999 40C15.3583 40 11.0861 38.4188 7.69232 35.7657Z"
    fill="white" />
</svg>
</template>

<script setup lang="ts">
interface Props {
  width?: string,
  height?: string,
}

const props = withDefaults(defineProps<Props>(), {
  width: '40px',
  height: '40px',
});
</script>

