<template>
  <div class="container-comments-count">
    <div class="comments-count-badge">12</div>
    <span class="comments-text">comments</span>
  </div>
</template>

<style lang="scss" scoped>
.container-comments-count {
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
}

.comments-count-badge {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #3B3D43;
  color: #FFF;
  font-family: 'Oxygen', sans-serif;
  font-weight: 700;
}

.comments-text {
  color: #FFF;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Oxygen', sans-serif;
  font-weight: 400;
}
</style>
