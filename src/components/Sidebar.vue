<template>
  <aside class="sidebar">
    <div class="container-logo">
      <LogoSVG />
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
import LogoSVG from '@/assets/logo.svg';
import Link from '@/components/Link.vue';

</script>

<style lang="scss" scoped>
.sidebar {
  width: 433px;
  background: #545760;
  height: 100%;
  cursor: pointer;
}

.container-logo {
  padding: 75px 0 65px 65px;
}

.border-bottom-logo {
  width: 312px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin: 0 auto;
}

.container-menu {
  height: calc(100% - 203px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
