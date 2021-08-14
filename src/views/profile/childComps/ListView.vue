<template>
  <div class="list-view">
    <div>
      <span class="icon"
        ><img src="~assets/img/profile/message.svg" alt=""
      /></span>
      我的消息
    </div>
    <div>
      <span class="icon"
        ><img src="~assets/img/profile/pointer.svg" alt=""
      /></span>
      积分商城
    </div>
    <div>
      <span class="icon"><img src="~assets/img/profile/vip.svg" alt="" /></span>
      会员卡
    </div>
    <div>
      <span class="icon"
        ><img src="~assets/img/profile/cart.svg" alt=""
      /></span>
      我的购物车
    </div>
    <div>
      <span class="icon"
        ><img src="~assets/img/profile/shopping.svg" alt=""
      /></span>
      下载购物APP
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
};
</script>

<style scoped>
.list-view > div {
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
}
.list-view > div:nth-child(3) {
  border-bottom: 12px solid #f2f2f2;
}
.list-view > div:last-child {
  border: 0;
}
.icon img {
  width: 20px;
  height: 20px;
  vertical-align: bottom;
}
</style>