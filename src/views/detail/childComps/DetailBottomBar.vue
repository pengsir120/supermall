<template>
  <div class="bottom-bar">
    <div>
      <div class="icon service"></div>
      <span>客服</span>
    </div>
    <div>
      <div class="icon shop"></div>
      <span>店铺</span>
    </div>
    <div>
      <div class="icon"></div>
      <span>收藏</span>
    </div>
    <div @click="addToCart">加入购物车</div>
    <div>购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 49px;
  background-color: #fff;
  position: relative;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: 0px 1px 10px rgba(100, 100, 100, 0.1);
}
.bottom-bar > div {
  flex: 1;
}
.bottom-bar > div:nth-last-child(-n + 2) {
  flex: 2;
  line-height: 49px;
}
.bottom-bar > div:nth-last-child(2) {
  background-color: #ffde0a;
  color: #000;
}
.bottom-bar > div:last-child {
  background-color: #ff7898;
  color: #fff;
}
.icon {
  width: 22px;
  height: 22px;
  margin: 5px auto;
  background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
}
.bottom-bar span {
  font-size: 15px;
}
.service {
  background-position: 0 -54px;
}
.shop {
  background-position: 0 -98px;
}
</style>