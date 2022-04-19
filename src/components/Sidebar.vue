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
              <li class="link-item">
                <a href="" class="link first">posts</a>
              </li>
              <li class="link-item">
                <a href="" class="link">users</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="container-myposts-mycomments">
          <nav>
            <ul>
              <li class="link-item">
                <a href="" class="link first">my posts</a>
              </li>
              <li class="link-item">
                <a href="" class="link">my users</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </aside>
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
