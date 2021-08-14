<template>
  <div class="navbar">
    <div class="navleft">
      <slot name="left"></slot>
    </div>
    <div class="navcenter">
      <slot name="center"></slot>
    </div>
    <div class="navright">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.navleft,
.navright {
  width: 60px;
}
.navcenter {
  flex: 1;
}
</style>