<template>
  <div id="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>

    <cart-list />

    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "shopcart",
  components: { NavBar, CartList, CartBottomBar },
  computed: {
    // 第一种写法
    ...mapGetters(["cartLength"]),

    // 第二种写法
    // ...mapGetters({
    //   length: "cartLength",
    // }),
  },
};
</script>

<style scoped>
#shop-cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>