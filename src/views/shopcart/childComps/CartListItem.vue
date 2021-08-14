<template>
  <div class="cart-item">
    <div class="item-select">
      <check-button :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="item-info">
      <div class="info-title">{{ product.title }}</div>
      <div class="info-desc">{{ product.desc }}</div>
      <div class="info-pricecount">
        <span class="price">￥{{ product.lowNowPrice }}</span>
        <span class="count">x{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartListItem",
  components: { CheckButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #aaa;
  color: #000;
}
.info-title,
.info-desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-select {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-title {
  font-size: 18px;
}
.info-desc {
  font-size: 14px;
  color: rgba(100, 100, 100, 0.9);
  padding: 16px 0;
}
.item-img {
  flex: 2;
  margin: 0 10px 0 6px;
}
.item-img img {
  width: 100%;
  height: 120px;
  border-radius: 8px;
}
.item-info {
  flex: 6;
  overflow: hidden;
  position: relative;
}
.info-pricecount {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
.price {
  color: #fb5e1c;
  font-size: 18px;
  float: left;
}
.count {
  float: right;
}
</style>