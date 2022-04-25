<template>
  <svg :width="width" :height="height" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M20 10V9H19H9.24421L13.1271 5.11711L13.8367 4.4075L13.1246 3.7004L11.7046 2.2904L10.9975 1.58828L10.2929 2.29289L2.29289 10.2929L1.58579 11L2.29289 11.7071L10.2929 19.7071L11 20.4142L11.7071 19.7071L13.1171 18.2971L13.8236 17.5906L13.1177 16.8835L9.24116 13H19H20V12V10Z"
    fill="white" stroke="white" stroke-width="2" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  width?: string,
  height?: string,
}

withDefaults(defineProps<Props>(), {
  width: '26px',
  height: '26px',
});
</script>

