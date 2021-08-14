<template>
  <div class="shop-info">
    <div class="name">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="count-score">
      <div class="sell">
        <span class="big-num">{{ (shop.cSells / 10000).toFixed(1) }}万</span>
        <span>总销量</span>
      </div>
      <div class="goods">
        <span class="big-num">{{ shop.cGoods }}</span>
        <span>全部宝贝</span>
      </div>
      <div class="lineitem"></div>
      <table>
        <tr v-for="item in shop.score" :key="item.name">
          <td>{{ item.name }}</td>
          <td :style="{ color: item.isBetter ? 'orangered' : '#5ea732' }">
            {{ item.score }}
          </td>
          <td>
            <span
              :style="{
                backgroundColor: item.isBetter ? 'orangered' : '#5ea732',
              }"
              >{{ item.isBetter ? "高" : "低" }}</span
            >
          </td>
        </tr>
      </table>
    </div>
    <div class="goshop"><div>进店逛逛</div></div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 8px 5px;
  color: #000;
  font-size: 16px;
  border-bottom: 2px solid #eee;
}
.name img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ccc;
  vertical-align: middle;
  margin-right: 10px;
}
.count-score {
  margin: 8px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
.sell,
.goods {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.big-num {
  font-size: 18px;
  font-weight: 540;
  margin-bottom: 8px;
}
.count-score td {
  padding: 5px;
}
.count-score tr td:nth-child(3) {
  color: #fff;
}
.lineitem {
  margin: 20px 0;
  border-left: 1px solid #ddd;
}
.goshop {
  text-align: center;
}
.goshop div {
  display: inline-block;
  width: 150px;
  margin-bottom: 15px;
  padding: 5px;
  font-size: 15px;
  background-color: #f2f2f2;
  border-radius: 10px;
}
</style>