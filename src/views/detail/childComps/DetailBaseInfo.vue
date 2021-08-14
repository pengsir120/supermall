<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="title">
      {{ goods.title }}
    </div>
    <div class="price">
      <span>{{ goods.price }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span v-if="goods.discountDesc">{{ goods.discountDesc }}</span>
    </div>
    <div class="info">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="other">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index].icon" alt="" />
        {{ goods.services[index - 1].name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 15px 5px;
}
.title {
  font-weight: 500;
  color: #000;
}
.price {
  margin: 8px 0;
}
.price span:first-child {
  font-size: 24px;
  font-weight: 500;
  color: var(--color-high-text);
}
.price span:nth-child(2) {
  margin-left: 5px;
  font-size: 12px;
  color: #9e9ea0;
  text-decoration: line-through;
}
.price span:nth-child(3) {
  position: relative;
  top: -7px;
  left: 5px;
  padding: 2px 5px;
  font-size: 10px;
  color: #fff;
  border-radius: 10px;
  background-color: var(--color-high-text);
}
.info {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info span {
  font-size: 14px;
  color: #b2b2b3;
}
.other {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 14px;
}
.other img {
  width: 15px;
  height: 15px;
  vertical-align: bottom;
}
</style>