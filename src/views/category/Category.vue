<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <side-bar :side-list="sideList" @sideTitleClick="sideTitleClick" />

    <category-content
      :category-goods="categoryGoods"
      :mini-wallkey="currentMiniWallkey"
      ref="content"
    />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import SideBar from "./childComps/SideBar.vue";
import CategoryContent from "./childComps/CategoryContent.vue";

import { getCategory, getSubcategory } from "network/category";

export default {
  name: "category",
  data() {
    return {
      sideList: [],
      categoryGoods: [],
      currentMiniWallkey: "10062603",
    };
  },
  components: { NavBar, SideBar, CategoryContent },
  created() {
    getCategory().then((res) => {
      this.sideList = res.data.category.list;
      this.sideTitleClick(0);
    });
    getSubcategory(3627).then((res) => {
      this.categoryGoods = res.data.list;
    });
  },
  methods: {
    sideTitleClick(index) {
      this.currentMiniWallkey = this.sideList[index].miniWallkey;
      const maitKey = this.sideList[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryGoods = res.data.list;
      });
      this.$refs.content.getCategoryGoods(this.currentMiniWallkey, "pop");
      this.$refs.content.$refs.scroll.scrollTo(0, 0, 1);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>