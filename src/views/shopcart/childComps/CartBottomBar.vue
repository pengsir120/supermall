<template>
  <div class="bottom-bar">
    <div class="select-all">
      <check-button
        :is-checked="allChecked"
        @click.native="allClick"
        class="select-button"
      />
      <span>全选</span>
    </div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, currentItem) => {
            return preValue + currentItem.count * currentItem.lowNowPrice;
          }, 0)
          .toFixed(2)
      );
    },
    totalCount() {
      return this.cartList.filter((item) => item.checked).length;
    },
    allChecked() {
      if (this.cartList.length === 0) return false;
      return this.cartList.every((item) => item.checked);
    },
  },
  methods: {
    allClick() {
      if (this.allChecked) {
        //全部选中
        this.cartList.forEach((ele) => {
          ele.checked = false;
        });
      } else {
        this.cartList.forEach((ele) => {
          ele.checked = true;
        });
      }
    },
    calcClick() {
      if (!this.allChecked) {
        this.$toast.show("请选择购买的商品");
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: #eee;
  position: relative;
}
.select-all,
.total {
  display: flex;
  align-items: center;
}
.select-button {
  margin: 0 6px;
}
.calculate {
  width: 110px;
  line-height: 40px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>