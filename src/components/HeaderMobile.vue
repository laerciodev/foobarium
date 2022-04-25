<template>
  <header class="header-mobile-container">
    <BackButtonIcon
      :class="['back-button-icon', isHome && 'hide-back-button']"
      @click="goToHome"
    />
    <Logo width="235px" height="30px" />
    <MenuIcon class="menu-icon" />
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BackButtonIcon from '@/components/BackButtonIcon.vue';
import Logo from '@/components/Logo.vue';
import MenuIcon from '@/components/MenuIcon.vue';

const route = useRoute();
const router = useRouter();
const isHome = ref(false);

watch(
  () => route.path,
  () => isHome.value = route.path === '/',
  { immediate: true }
)

function goToHome() {
  router.push('/')
}

</script>

<style lang="scss" scoped>
.header-mobile-container {
  display: none;
  background: #545760;
  width: 100%;
  height: 75px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back-button-icon {
    margin-left: 22px;
  }

  .hide-back-button {
    visibility: hidden;
  }

  .menu-icon {
    margin-right: 18px;
  }
}
</style>

