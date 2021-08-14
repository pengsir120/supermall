<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  text-align: center;
  font-size: 14px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
}
</style>