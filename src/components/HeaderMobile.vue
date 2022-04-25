<template>
  <header class="header-mobile-container">
    <BackButtonIcon class="back-button-icon" />
    <Logo width="235px" height="30px" />
    <MenuIcon class="menu-icon" />
  </header>
</template>

<script setup lang="ts">
import BackButtonIcon from '@/components/BackButtonIcon.vue';
import Logo from '@/components/Logo.vue';
import MenuIcon from '@/components/MenuIcon.vue';

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

  .menu-icon {
    margin-right: 18px;
  }
}
</style>

