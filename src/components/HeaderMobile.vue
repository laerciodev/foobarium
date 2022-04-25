<template>
  <header class="header-mobile-container">
    <p>
      Foobarium
    </p>
    <input type="checkbox" id="menu-hamburguer"/>
    <label for="menu-hamburguer">
      <div class="menu">
        <span class="hamburguer"></span>
      </div>
    </label>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.header-mobile-container {
  display: none;
  background: #545760;
  width: 100%;
  height: 75px;

  @media (max-width: 768px) {
    display: flex;
  }
}


.hamburguer {
  position: relative;
  display: block;
  background: #FFF;
  width: 40px;
  height: 4px;
  top: 29px;
  left: 15px;
  transition: .5s ease-in-out;
}

.hamburguer:before,
.hamburguer:after {
  background: #FFF;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  transition: .5s ease-in-out;
}

.hamburguer:before {
  top: -10px;
}

.hamburguer:after {
  bottom: -10px;
}
input:checked ~ ul {
  opacity: 1;
}
input {
  display: none;
}

input:checked ~ label .menu {
  box-shadow: 0 0 0 130vw #fff, 0 0 0 130vh #fff;
}

input:checked ~ label .hamburguer {
  transform: rotate(45deg)
}

input:checked ~ label .hamburguer:before {
  transform: rotate(90deg);
  top: 0px;
}

input:checked ~ label .hamburguer:after {
  transform: rotate(90deg);
  bottom: 0px;
}

</style>

