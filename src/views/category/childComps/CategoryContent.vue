<template>
  <div class="category-content">
    <scroll class="content" ref="scroll">
      <div class="content-goodlist">
        <div
          class="content-gooditem"
          v-for="(item, index) in categoryGoods"
          :key="index"
        >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="catImgLoad" />
            <span>{{ item.title }}</span>
          </a>
        </div>
      </div>
      <tab-control
        :titles="['综合', '新品', '销量']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="goods[currentType]" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getSubcategoryDetail } from "network/category";
import { itemListenerMixin } from "common/mixin";

export default {
  name: "CategoryContent",
  data() {
    return {
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      currentType: "pop",
    };
  },
  props: {
    categoryGoods: {
      type: Array,
      default() {
        return [];
      },
    },
    miniWallkey: String,
  },
  mixins: [itemListenerMixin],
  activated() {
    this.$bus.$on("itemImageLoad", this.itemImgLoad);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.$bus.$off("itemImageLoad", this.itemImgLoad);
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          this.getCategoryGoods(this.miniWallkey, this.currentType);
          break;
        case 1:
          this.currentType = "new";
          this.getCategoryGoods(this.miniWallkey, this.currentType);
          break;
        case 2:
          this.currentType = "sell";
          this.getCategoryGoods(this.miniWallkey, this.currentType);
          break;
      }
    },
    catImgLoad() {
      this.$refs.scroll.refresh();
    },
    getCategoryGoods(miniWallkey, type) {
      getSubcategoryDetail(miniWallkey, type).then((res) => {
        this.goods[type] = [];
        this.goods[type].push(...res);
      });
    },
  },
  components: { Scroll, TabControl, GoodsList },
};
</script>

<style scoped>
.category-content {
  width: calc(100vw - 100px);
  height: calc(100vh - 44px - 49px);
  float: right;
  overflow: hidden;
}
.content {
  height: 100%;
}
.content-goodlist {
  display: flex;
  flex-wrap: wrap;
}
.content-gooditem {
  width: 33.33%;
  text-align: center;
  font-size: 12px;
}
.content-gooditem img {
  width: 100%;
  padding: 15px;
}
</style>