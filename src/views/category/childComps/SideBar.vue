<template>
  <div class="outer">
    <scroll class="content">
      <div class="side-bar">
        <ul>
          <li
            v-for="(item, index) in sideList"
            :key="item.maitKey"
            @click="sideTitleClick(index)"
            :class="{ active: currentIndex === index }"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";

export default {
  components: { Scroll },
  name: "sidebar",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    sideList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    sideTitleClick(index) {
      this.currentIndex = index;
      this.$emit("sideTitleClick", index);
    },
  },
};
</script>

<style scoped>
.outer {
  float: left;
  width: 100px;
  height: calc(100vh - 44px - 49px);
  background-color: #f6f6f6;
}
.content {
  height: 100%;
  overflow: hidden;
}
.side-bar {
  height: 703.5px;
  font-size: 14px;
  text-align: center;
}
.side-bar ul li {
  padding: 14px;
}
.active {
  color: var(--color-high-text);
  font-weight: 600;
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>