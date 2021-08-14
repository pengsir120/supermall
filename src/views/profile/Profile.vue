<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>

    <user-info />

    <list-view />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import UserInfo from "./childComps/UserInfo.vue";
import ListView from "./childComps/ListView.vue";

export default {
  name: "profile",
  components: { NavBar, UserInfo, ListView },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>