<template>
  <aside class="sidebar">
    <div class="container-logo">
      <Logo :width="widthLogo" :height="heightLogo" />
    </div>
    <div class="border-bottom-logo"></div>
      <div class="container-menu">
        <div class="container-posts-users">
          <nav>
            <ul>
              <Link value="posts" />
              <Link value="users" />
            </ul>
          </nav>
        </div>
        <div class="container-myposts-mycomments">
          <nav>
            <ul>
              <Link value="my posts" />
              <Link value="my comments" />
            </ul>
          </nav>
        </div>
      </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Logo from '@/components/Logo.vue';
import Link from '@/components/Link.vue';

const widthLogo = ref('312px');
const heightLogo = ref('59px');

function onResizeLogo() {
  const isMobile = window.innerWidth < 768;
  widthLogo.value = isMobile ? '235px' : '312px';
  heightLogo.value = isMobile ? '35px' : '59px';
}

onMounted(() => {
  window.addEventListener('resize', onResizeLogo)
});

onUnmounted(() => {
  window.removeEventListener('resize', onResizeLogo)
})

</script>

<style lang="scss" scoped>
.sidebar {
  width: 433px;
  background: #545760;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 300px;
    position: absolute;
    left: 0;
    top: 74px;
    height: 100vh;
  }
}

.container-logo {
  padding: 75px 0 65px 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 235px;
    margin: 0;
    padding: 25px 0 25px 17px;
  }
}

.border-bottom-logo {
  width: 312px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 235px;
    margin: 0;
  }
}

.container-menu {
  height: calc(100% - 203px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
